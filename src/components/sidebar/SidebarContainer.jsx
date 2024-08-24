import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";
import { useMediaQuery } from "@mui/material";
import { navigateTo } from "@redux/actions/navigateAction";
import usePostRequest from "@hooks/usePostRequest";
import { Home, Settings, Person, CheckBox } from "@mui/icons-material";
import Notification from "@components/notification/NotificationContainer";
import { delay } from "@utils/commonUtils";

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRoute = useSelector((state) => state.navigation.currentRoute);

  const handleNavigate = (route) => {
    dispatch(navigateTo(route));
    navigate(route);
  };

  const menuItems = [
    { text: "Home", icon: <Home />, route: "/home" },
    { text: "Device", icon: <Settings />, route: "/devices" },
    { text: "Profile", icon: <Person />, route: "/profile" },
    { text: "Todo list", icon: <CheckBox />, route: "/todolist" },
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
        sessionStorage.clear();
        navigate("/");
      }
    } catch (error) {
      setNotification({
        message: error.response?.data?.message || "다시 시도해주세요",
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
