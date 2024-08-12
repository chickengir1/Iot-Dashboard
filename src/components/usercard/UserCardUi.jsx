import React from "react";
import { Box, Typography, Avatar, Card, CardContent } from "@mui/material";

const UserCardUi = () => {
  const layout = {
    width: "412px",
  };
  return (
    <Box sx={layout}>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar>icon</Avatar>
            <Box sx={{ ml: 2 }}>
              <Typography variant="body1">유저 ID</Typography>
              <Typography variant="body2">good morning!</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default UserCardUi;
