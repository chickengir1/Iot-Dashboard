import { Settings } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

const styles = {
  deviceStyled: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    borderRadius: 2,
    boxShadow: 1,
    bgcolor: "background.paper",
    gap: 2,
    cursor: "pointer",
  },
  avatarStyle: {
    width: 56,
    height: 56,
    bgcolor: "grey.300",
  },
};

const DeviceItemUi = ({
  name,
  description,
  onClick,
  onDelete,
  anchorEl,
  onOpen,
  onClose,
}) => {
  return (
    <Box sx={styles.deviceStyled} onClick={onClick}>
      <Avatar variant="rounded" sx={styles.avatarStyle} />
      <Box flexGrow={1}>
        <Typography variant="body1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <IconButton edge="start" onClick={onOpen}>
        <Settings />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={anchorEl}
        onClose={onClose}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem onClick={onDelete}>기기 삭제</MenuItem>
      </Menu>
    </Box>
  );
};

export default DeviceItemUi;
