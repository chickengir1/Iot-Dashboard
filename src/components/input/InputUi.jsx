import { FormControl, InputBase, InputLabel, Typography } from "@mui/material";
import React from "react";

const InputUi = ({ id, label, placeholder, error }) => {
  const inputStyle = {
    "label + &": {
      marginTop: 2,
    },
    borderRadius: 2,
    padding: "4px 12px",
    backgroundColor: "#fff",
    border: "1px solid #d9d9d9",
    "&:hover": {
      borderColor: "gray",
    },
    "&.Mui-focused": {
      borderColor: "#525252",
    },
  };

  return (
    <FormControl fullWidth>
      <InputLabel shrink htmlFor={id}>
        {label}
      </InputLabel>
      <InputBase placeholder={placeholder} id={id} sx={inputStyle} />
      <Typography sx={{ color: "#9ACD32" }}>{error}</Typography>
    </FormControl>
  );
};

export default InputUi;
