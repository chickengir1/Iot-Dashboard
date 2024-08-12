import React from "react";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

const UserCardUi = () => {
  // 나중에 서버에서 온 데이터로 대체
  const index = 4;

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
    <>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Box sx={userCardLayout}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar sx={{ padding: "4px" }}>icon</Avatar>
              <Box sx={{ ml: 2 }}>
                <Typography variant="body1">유저 ID</Typography>
                <Typography variant="body2">good morning!</Typography>
              </Box>
            </Box>
            <Box sx={badgeContainerStyle}>
              <Badge badgeContent={index} color="primary">
                <MailIcon color="action" />
              </Badge>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCardUi;
