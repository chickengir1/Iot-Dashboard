import { Box, InputLabel, TextField, Typography } from "@mui/material";

const InputUi = ({ id, label, placeholder, error }) => {
  const inputStyle = {
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
  };

  return (
    <Box sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <InputLabel shrink htmlFor={id}>
        {label}
      </InputLabel>
      <TextField
        placeholder={placeholder}
        id={id}
        variant="outlined"
        sx={inputStyle}
      />
      <Typography sx={{ color: "#9ACD32" }}>{error}</Typography>
    </Box>
  );
};

export default InputUi;
