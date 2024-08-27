import { BottomNavigation, BottomNavigationAction } from "@mui/material";

const styles = {
  bottomNav: {
    width: "100%",
    position: "fixed",
    zIndex: "9999",
    bottom: 0,
    left: 0,
    right: 0,
    boxShadow: "0 -2px 10px rgba(0,0,0,0.1)",
  },
  iconWrapper: { minWidth: 0 },
};

const SidebarMobile = ({ menuItems, onMenuClick }) => (
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

export default SidebarMobile;
