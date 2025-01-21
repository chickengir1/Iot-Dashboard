import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";

const styles = {
  card: {
    mb: 2,
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid rgba(168, 213, 186, 0.7)",
  },
  userCardLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "70px",
  },
  avatar: {
    padding: "4px",
    width: 56,
    height: 56,
    backgroundColor: "#eee",
    fontSize: "48px",
    color: "#333",
  },
  userInfo: {
    ml: 2,
  },
  userIdText: {
    fontWeight: "bold",
    color: "#333",
  },
  messageText: {
    color: "#666",
    mt: 0.5,
  },
};

const UserCardUi = ({ userId, message, icon }) => {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Box sx={styles.userCardLayout}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={styles.avatar}>{icon}</Avatar>
            <Box sx={styles.userInfo}>
              <Typography variant="h6" sx={styles.userIdText}>
                {userId}님
              </Typography>
              <Typography variant="body1" sx={styles.messageText}>
                {message}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCardUi;
