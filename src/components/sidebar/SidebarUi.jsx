import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useMediaQuery } from "@mui/material";

const menuItems = [
  { text: "Home", icon: <HomeIcon />, selected: true },
  { text: "Device", icon: <SettingsIcon />, selected: false },
  { text: "Profile", icon: <PersonIcon />, selected: false },
  { text: "News", icon: <DescriptionIcon />, selected: false },
  { text: "Todo list", icon: <CheckBoxIcon />, selected: false },
];

const MobileSidebar = () => {
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
      }}
      showLabels
    >
      {menuItems.map((item, index) => (
        <BottomNavigationAction
          key={index}
          icon={item.icon}
          sx={{ minWidth: 0 }}
        />
      ))}
    </BottomNavigation>
  );
};

const DesktopSidebar = () => {
  const sidebarStyle = {
    width: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px 8px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const logoStyle = {
    marginBottom: "32px",
    textAlign: "start",
    fontSize: "24px",
    color: "#d23f57",
  };

  const listItemStyle = {
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#eef2f6",
    },
  };

  const selectedItemStyle = {
    backgroundColor: "#eef2f6",
  };

  return (
    <Box sx={sidebarStyle}>
      <Typography sx={logoStyle}>로고</Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={index}
            sx={{ ...listItemStyle, ...(item.selected && selectedItemStyle) }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem button sx={listItemStyle}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </Box>
  );
};

const SidebarUi = () => {
  const isMobile = useMediaQuery("(max-width:412px)");

  return isMobile ? <MobileSidebar /> : <DesktopSidebar />;
};

export default SidebarUi;
