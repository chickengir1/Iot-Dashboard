import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const SelectUi = () => {
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
    <Box>
      <Box
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {/* <InputLabel shrink htmlFor={"email"}>
          {"이메일"}
        </InputLabel> */}
        <TextField
          placeholder={"email"}
          id={"email"}
          InputProps={{
            sx: inputStyle,
          }}
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
      </Box>
      <Typography sx={{ color: "#9ACD32" }}>{"233"}</Typography>
    </Box>
  );
};

export default SelectUi;
