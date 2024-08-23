import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";
import { useMediaQuery } from "@mui/material";
import { navigateTo } from "../../redux/actions/navigateAction";
import usePostRequest from "../../hooks/usePostRequest";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Description as DescriptionIcon,
  CheckBox as CheckBoxIcon,
} from "@mui/icons-material";
import Notification from "../notification/NotificationContainer";
import { delay } from "../../utils/commonUtils";

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRoute = useSelector((state) => state.navigation.currentRoute);

  const handleNavigate = (route) => {
    dispatch(navigateTo(route));
    navigate(route);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, route: "/home" },
    {
      text: "Device",
      icon: <SettingsIcon />,
      route: "/profile/:userid/devices",
    },
    { text: "Profile", icon: <PersonIcon />, route: "/profile" },
    { text: "News", icon: <DescriptionIcon />, route: "/newslist" },
    { text: "Todo list", icon: <CheckBoxIcon />, route: "/todolist" },
  ];

  const isMobile = useMediaQuery("(max-width:1279px)");

  const api = "/api/auth/logout";
  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });

  const { postData } = usePostRequest(api);

  const handleLogout = async () => {
    try {
      const response = await postData();
      const { message } = response;

      setNotification({
        message: message,
        type: "success",
        open: true,
      });
      if (response.message == "성공적으로 로그아웃되었습니다.") {
        await delay(500);
        navigate("/");
      }
    } catch (error) {
      setNotification({
        message: error.response?.data?.message,
        type: "error",
        open: true,
      });
    }
  };

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      {isMobile ? (
        <SidebarMobile menuItems={menuItems} onMenuClick={handleNavigate} />
      ) : (
        <SidebarDesktop
          menuItems={menuItems}
          currentRoute={currentRoute}
          onMenuClick={handleNavigate}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default SidebarContainer;
