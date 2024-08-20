import { Avatar, Box, IconButton, Typography } from "@mui/material";

const styles = {
  deviceStyled: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    borderRadius: 2,
    boxShadow: 1,
    bgcolor: "background.paper",
    gap: 2,
  },
  avatarStyle: {
    width: 56,
    height: 56,
    bgcolor: "grey.300",
  },
};

const ListItemUi = ({ title, description, icon, avatar = false }) => {
  return (
    <Box sx={styles.deviceStyled}>
      {avatar && <Avatar variant="rounded" sx={styles.avatarStyle} />}
      <Box flexGrow={1}>
        <Typography variant="body1" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <IconButton edge="end" aria-label="settings">
        {icon}
      </IconButton>
    </Box>
  );
};

export default ListItemUi;
