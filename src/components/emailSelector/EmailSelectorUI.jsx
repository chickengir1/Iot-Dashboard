import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  Select,
  FormControl,
  Typography,
} from "@mui/material";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    marginBottom: "16px",
  },
  textField: {
    flex: 1,
    height: "56px",
  },
  formControl: {
    flex: 1,
    height: "56px",
  },
};

const EmailSelectorUI = ({
  email,
  domain,
  onEmailChange,
  onDomainChange,
  emailDomains,
  errors,
  register,
}) => (
  <Box sx={styles.container}>
    <TextField
      label="이메일"
      placeholder="이메일"
      type="text"
      value={email}
      onChange={onEmailChange}
      error={!!errors.email}
      helperText={errors.email ? "이메일을 입력하세요." : " "}
      {...register("email", { required: true })}
      sx={styles.textField}
    />
    <Typography>@</Typography>
    <FormControl sx={styles.formControl}>
      <Select
        value={domain}
        onChange={onDomainChange}
        error={!!errors.domain}
        {...register("domain", { required: true })}
      >
        {emailDomains.map((domain, idx) => (
          <MenuItem key={idx} value={domain}>
            {domain}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);

export default EmailSelectorUI;
