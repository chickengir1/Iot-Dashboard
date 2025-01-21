import { DeleteOutline, Settings } from "@mui/icons-material";
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
        open={Boolean(anchorEl)}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={onDelete}
          sx={{ color: "#FF3333", alignItems: "center" }}
        >
          <DeleteOutline />
          <Typography>기기 삭제</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default DeviceItemUi;
