import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";

const SaveLoginUi = ({ rememberLogin, handleCheckboxChange }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
      <Checkbox
        sx={{ padding: 0 }}
        checked={rememberLogin}
        onChange={handleCheckboxChange}
      />
      <Typography>로그인 정보 기억하기</Typography>
    </Box>
  );
};

export default SaveLoginUi;
