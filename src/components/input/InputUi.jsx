import { Box, InputLabel, TextField, Typography } from "@mui/material";
import React from "react";

const InputUi = ({ id, label, placeholder, error }) => {
  const inputStyle = {
    backgroundColor: "#fff",
    borderColor: "#d9d9d9",
    borderRadius: 1,
    height: "40px",
    "&:hover": {
      borderColor: "gray",
    },
    "&.Mui-focused": {
      borderColor: "#525252",
    },
  };

  return (
    <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <InputLabel shrink htmlFor={id}>
        {label}
      </InputLabel>
      <TextField
        placeholder={placeholder}
        id={id}
        InputProps={{ sx: inputStyle }}
      />
      <Typography sx={{ color: "#9ACD32" }}>{error}</Typography>
    </Box>
  );
};

export default InputUi;
