import { Box, Typography, ListItem, Divider } from "@mui/material";
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
    border: "1px solid #ddd",
    borderRadius: "8px",
  },
  listItem: {
    borderRadius: "8px",
    mb: 1,
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
    <Image src={`logo/smart-farm-logo.png`} alt="로고" />
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
