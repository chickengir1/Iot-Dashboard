import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const SelectUi = () => {
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
    <Box>
      <FormControl
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <InputLabel shrink htmlFor={"email"}>
          {"이메일"}
        </InputLabel>
        <InputBase
          placeholder={"email"}
          id={"email"}
          sx={inputStyle}
          fullWidth
        />
        <Typography>@</Typography>

        <Select value={10} sx={{ height: "40px" }} fullWidth>
          <MenuItem value="None">
            <em>123</em>
          </MenuItem>
          <MenuItem value={10}>naver.com</MenuItem>
          <MenuItem value={20}>google.com</MenuItem>
        </Select>
      </FormControl>
      <Typography sx={{ color: "#9ACD32" }}>{"233"}</Typography>
    </Box>
  );
};

export default SelectUi;
