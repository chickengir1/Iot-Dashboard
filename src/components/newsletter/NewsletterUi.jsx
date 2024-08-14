import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";

const NewsletterUi = () => {
  return (
    <Box sx={{ mb: 2 }}>
      <Card sx={{ mb: 1 }}>
        <CardContent>
          <Typography variant="body2">Title</Typography>
          <Typography variant="caption">상단 20글자까지 제한</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsletterUi;
