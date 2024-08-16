import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const SelectUi = ({ id, label, placeholder, error, selectValue }) => {
  const styles = {
    inputStyle: {
      "& .MuiOutlinedInput-root": {
        backgroundColor: "#fff",
        borderRadius: 1,
        height: "40px",
        "& fieldset": {
          borderColor: "#d9d9d9",
        },
        "&:hover fieldset": {
          borderColor: "gray",
        },
        "&.Mui-focused fieldset": {
          borderColor: "gray",
        },
      },
    },
    selectStyle: {
      backgroundColor: "#fff",
      borderColor: "#d9d9d9",
      borderRadius: 1,
      height: "40px",
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "gray",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "gray",
      },
    },
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "8px",
    },
    alphaSymbol: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "40px",
    },
  };

  return (
    <Box sx={{ justifyContent: "center", alignItems: "center" }}>
      <InputLabel shrink htmlFor={id}>
        {label}
      </InputLabel>
      <Box sx={styles.container}>
        <TextField
          placeholder={placeholder}
          id={id}
          sx={styles.inputStyle}
          fullWidth
        />
        <Box sx={styles.alphaSymbol}>
          <Typography>@</Typography>
        </Box>
        <Select value={selectValue} sx={styles.selectStyle} fullWidth>
          <MenuItem value="None">
            <em>123</em>
          </MenuItem>
          <MenuItem value={10}>naver.com</MenuItem>
          <MenuItem value={20}>google.com</MenuItem>
        </Select>
      </Box>
      <Typography sx={{ color: "#9ACD32" }}>{error}</Typography>
    </Box>
  );
};

export default SelectUi;
