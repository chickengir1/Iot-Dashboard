import { Box, InputLabel, TextField, Typography } from "@mui/material";

const InputUi = ({ id, label, placeholder, error }) => {
  const inputStyle = {
    backgroundColor: "#fff",
    borderColor: "pink",
    borderRadius: 1,
    height: "40px",
    // hover,focus 했을 때 색상 변화 적용 안 됨. 전체적으로 textfield bordercolor 안 바뀜.
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
