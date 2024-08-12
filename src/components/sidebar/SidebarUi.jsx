import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const sidebarUi = () => {
  const sidebarStyle = {
    width: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px 8px",
    border: "1px solid #ddd",
  };

  const logoStyle = {
    marginBottom: "32px",
    textAlign: "start",
    fontSize: "24px",
    color: "#d23f57",
  };

  //호버 애니메이션임.
  const listItemStyle = {
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#eef2f6",
    },
  };

  const selectedItemStyle = {
    backgroundColor: "#eef2f6",
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, selected: true },
    { text: "Device", icon: <SettingsIcon />, selected: false },
    { text: "Profile", icon: <PersonIcon />, selected: false },
    { text: "News", icon: <DescriptionIcon />, selected: false },
    { text: "Todo list", icon: <CheckBoxIcon />, selected: false },
  ];

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

export default sidebarUi;
