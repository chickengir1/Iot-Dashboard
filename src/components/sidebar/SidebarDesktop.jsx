import {
  Box,
  ListItem,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuList from "./MenuList";
import { ExitToApp as ExitToAppIcon } from "@mui/icons-material";
import { Image } from "@styles/index";

const styles = {
  sidebar: {
    minWidth: "220px",
    maxWidth: "220px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "16px 8px",
    border: "3px solid rgba(176, 190, 197, 0.5)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    borderRadius: "8px",
    background: "#F8FAFB",
  },
  listItem: {
    borderRadius: "8px",
    display: "flex",
    border: "2px solid rgba(176, 190, 197, 0.2)",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
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
    <Image src={`logo/smart-farm-logo.webp`} alt="로고" />
    <MenuList
      items={menuItems}
      currentRoute={currentRoute}
      onMenuClick={onMenuClick}
      isMobile={false}
    />
    <Divider />
    <ListItem button sx={styles.listItem} onClick={handleLogout}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText>Logout</ListItemText>
    </ListItem>
  </Box>
);

export default SidebarDesktop;
