import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const LoadingSpinner = () => {
  const isLoading = useSelector((state) => state.loading.loading);
  if (!isLoading) return null;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundColor: "#f0f4f8",
        animation: "fade-in 1s ease-in-out",
        "@keyframes fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }}
    >
      <CircularProgress color="primary" size={80} thickness={4} />
      <Typography
        variant="h6"
        sx={{ marginTop: 2, color: "#3f51b5", fontWeight: "bold" }}
      >
        로딩 중입니다...
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
