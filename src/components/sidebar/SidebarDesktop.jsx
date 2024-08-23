import React from "react";
import { Box, Typography, ListItem, Divider } from "@mui/material";
import MenuList from "./MenuList";
import { ExitToApp as ExitToAppIcon } from "@mui/icons-material";

const styles = {
  sidebar: {
    minWidth: "220px",
    maxWidth: "220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px 8px",
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  logo: {
    marginBottom: "32px",
    textAlign: "start",
    fontSize: "24px",
    color: "#d23f57",
  },
  listItem: {
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#eef2f6",
    },
  },
  selectedItem: {
    backgroundColor: "#eef2f6",
  },
};

const SidebarDesktop = ({
  menuItems,
  currentRoute,
  onMenuClick,
  handleLogout,
}) => (
  <Box sx={styles.sidebar}>
    <Typography sx={styles.logo}>로고</Typography>
    <MenuList
      items={menuItems}
      currentRoute={currentRoute}
      onMenuClick={onMenuClick}
      isMobile={false}
    />
    <Divider />
    <ListItem button sx={styles.listItem} onClick={handleLogout}>
      <ExitToAppIcon />
      <Typography>Logout</Typography>
    </ListItem>
  </Box>
);

export default SidebarDesktop;
