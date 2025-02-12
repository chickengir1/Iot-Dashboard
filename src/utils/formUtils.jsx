import { Box, TextField } from "@mui/material";

export const generateFormFields = (field, register, errors, watch) => {
  let validation = {};

  if (field.name === "id") {
    validation = {
      required: `${field.label}을 입력하세요.`,
      minLength: {
        value: 3,
        message: "아이디는 최소 3글자 이상이어야 합니다.",
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

  if (field.name === "todo") {
    validation = {
      required: `${field.label}을 입력하세요.`,
      maxLength: {
        value: 30,
        message: "30글자 이하로 입력해주세요.",
      },
    };
  }

  if (field.name === "deviceId") {
    validation = {
      required: `${field.label}을 입력하세요.`,
      minLength: {
        value: 5,
        message: "5글자 이상으로 입력해주세요.",
      },
    };
  }

  if (field.name === "deviceName") {
    validation = {
      required: `${field.label}을 입력하세요.`,
      validate: (value) =>
        value === watch("deviceId") ||
        "디바이스 아이디와 이름이 일치하지 않습니다.",
    };
  }

  if (field.name === "description") {
    validation = {
      required: `${field.label}을 입력하세요.`,
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
