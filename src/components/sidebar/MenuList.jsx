import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const MenuList = ({ items, currentRoute, onMenuClick, isMobile }) => (
  <List>
    {items.map((item, index) => (
      <ListItem
        button
        key={index}
        onClick={() => onMenuClick(item.route)}
        sx={{
          borderRadius: "8px",
          backgroundColor: item.route === currentRoute ? "#eef2f6" : "inherit",
          "&:hover": {
            backgroundColor: "#eef2f6",
          },
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        {!isMobile && <ListItemText primary={item.text} />}
      </ListItem>
    ))}
  </List>
);

export default MenuList;
