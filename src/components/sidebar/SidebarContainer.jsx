import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";
import { useMediaQuery } from "@mui/material";
import { navigateTo } from "../../redux/actions/navigateAction";
import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Person as PersonIcon,
  Description as DescriptionIcon,
  CheckBox as CheckBoxIcon,
} from "@mui/icons-material";

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

  return isMobile ? (
    <SidebarMobile menuItems={menuItems} onMenuClick={handleNavigate} />
  ) : (
    <SidebarDesktop
      menuItems={menuItems}
      currentRoute={currentRoute}
      onMenuClick={handleNavigate}
    />
  );
};

export default SidebarContainer;
