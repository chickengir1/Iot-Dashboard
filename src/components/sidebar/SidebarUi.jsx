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
  useMediaQuery,
} from "@mui/material";
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
  bottomNav: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
  },
  iconWrapper: { minWidth: 0 },
};

const MenuList = ({ items, currentRoute, onMenuClick, isMobile }) => (
  <List>
    {items.map((item, index) => (
      <ListItem
        button
        key={index}
        onClick={() => onMenuClick(item.route)}
        sx={{
          ...styles.listItem,
          ...(item.route === currentRoute && styles.selectedItem),
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        {isMobile ? null : <ListItemText primary={item.text} />}
      </ListItem>
    ))}
  </List>
);

const MobileSidebar = ({ menuItems, onMenuClick }) => (
  <BottomNavigation sx={styles.bottomNav} showLabels>
    {menuItems.map((item, index) => (
      <BottomNavigationAction
        key={index}
        icon={item.icon}
        onClick={() => onMenuClick(item.route)}
        sx={styles.iconWrapper}
      />
    ))}
  </BottomNavigation>
);

const DesktopSidebar = ({ menuItems, currentRoute, onMenuClick }) => (
  <Box sx={styles.sidebar}>
    <Typography sx={styles.logo}>로고</Typography>
    <MenuList
      items={menuItems}
      currentRoute={currentRoute}
      onMenuClick={onMenuClick}
      isMobile={false}
    />
    <Divider />
    <ListItem button sx={styles.listItem}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </Box>
);

const SidebarUi = ({ menuItems, currentRoute, onMenuClick }) => {
  const isMobile = useMediaQuery("(max-width:1279px)");

  return isMobile ? (
    <MobileSidebar menuItems={menuItems} onMenuClick={onMenuClick} />
  ) : (
    <DesktopSidebar
      menuItems={menuItems}
      currentRoute={currentRoute}
      onMenuClick={onMenuClick}
    />
  );
};

export default SidebarUi;
