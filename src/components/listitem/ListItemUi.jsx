import { Box, Checkbox, Typography } from "@mui/material";

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

const ListItemUi = ({ date, description, isFinish }) => {
  return (
    <Box sx={styles.deviceStyled}>
      <Box flexGrow={1}>
        <Typography variant="body1" fontWeight="bold">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <Checkbox checked={isFinish} />
    </Box>
  );
};

export default ListItemUi;
