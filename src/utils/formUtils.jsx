import { Box, TextField } from "@mui/material";

// 폼 필드를 동적으로 생성하는 유틸 함수 generateFormFields 로 변경 예정
export const generateFormFields = (field, register, errors, watch) => {
  let validation = {};

  if (field.name === "id") {
    validation = {
      required: `${field.label}을 입력하세요.`,
      minLength: {
        value: 5,
        message: "아이디는 최소 5글자 이상이어야 합니다.",
      },
    };
  }

  if (field.name === "password") {
    validation = {
      required: `${field.label}을 입력하세요.`,
      minLength: {
        value: 8,
        message: "비밀번호는 최소 8글자 이상이어야 합니다.",
      },
    };
  }

  if (field.name === "confirmPassword") {
    validation = {
      required: `${field.label}을 입력하세요.`,
      validate: (value) =>
        value === watch("password") || "비밀번호가 일치하지 않습니다.",
    };
  }

  return (
    <Box key={field.name}>
      <TextField
        label={field.label}
        placeholder={field.label}
        type={field.type}
        {...register(field.name, validation)}
        error={!!errors[field.name]}
        helperText={errors[field.name] ? errors[field.name].message : " "}
        fullWidth
        margin="normal"
        sx={{ maxHeight: "65px" }}
      />
    </Box>
  );
};
