import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const SelectUi = () => {
  return (
    <FormControl fullWidth>
      <InputLabel shrink htmlFor={"email"}>
        {"이메일"}
      </InputLabel>
      <InputBase
        placeholder={"google@google.com"}
        id={"email"}
        // sx={inputStyle}
      />
      <Typography>@</Typography>

      <Select value={10} sx={{ height: "40px" }}>
        <MenuItem value="None">
          <em>123</em>
        </MenuItem>
        <MenuItem value={10}>naver.com</MenuItem>
        <MenuItem value={20}>google.com</MenuItem>
      </Select>
      <Typography sx={{ color: "#9ACD32" }}>{"233"}</Typography>
    </FormControl>
  );
};

export default SelectUi;
