import React from "react";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const UserCardUi = ({ userId, message, icon, badgeCount }) => {
  // 레이아웃 스타일
  const userCardLayout = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const badgeContainerStyle = {
    border: "1px solid #ddd",
    padding: 1,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
          <Box sx={badgeContainerStyle}>
            <Badge badgeContent={badgeCount} color="primary">
              <MailIcon color="action" />
            </Badge>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCardUi;
