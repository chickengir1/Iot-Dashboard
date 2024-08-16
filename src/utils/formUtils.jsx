import { Box, TextField } from "@mui/material";

// 폼 필드를 동적으로 생성하는 유틸 함수
export const utilsFormField = (field, register, errors) => (
  <Box key={field.name}>
    <TextField
      label={field.label}
      placeholder={field.label}
      type={field.type}
      {...register(field.name, { required: true })}
      error={!!errors[field.name]}
      helperText={errors[field.name] ? `${field.label}을 입력하세요.` : " "}
      fullWidth
      margin="normal"
      sx={{ maxHeight: "65px" }}
    />
  </Box>
);
