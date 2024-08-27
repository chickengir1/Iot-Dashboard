import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";

const UserCardUi = ({ userId, message, icon }) => {
  // 레이아웃 스타일
  const userCardLayout = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Box sx={userCardLayout}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ padding: "4px" }}>{icon}</Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography variant="body1">{userId}님</Typography>
              <Typography variant="body2">{message}</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCardUi;
