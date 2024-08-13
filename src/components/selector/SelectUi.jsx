import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

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
      <InputLabel shrink htmlFor={"email"}>
        {"이메일"}
      </InputLabel>
      <Box
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <TextField
          placeholder={"email"}
          id={"email"}
          InputProps={{
            sx: inputStyle,
          }}
          fullWidth
        />
        <Box
          sx={{
            width: "30px",
            height: "24px",
            margin: "8px",
          }}
        >
          @
        </Box>

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
