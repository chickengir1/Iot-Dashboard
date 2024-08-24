import { Box } from "@mui/material";
import EmailSelectorContainer from "@components/emailSelector/EmailSelectorContainer";
import { generateFormFields } from "@utils/formUtils";
import { BlueRoundedButton } from "@styles";

export const generateFields = ({
  formFields,
  onSubmit,
  register,
  errors,
  watch,
}) => {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <EmailSelectorContainer />
      {formFields.map((field) =>
        generateFormFields(field, register, errors, watch)
      )}
      <BlueRoundedButton
        type="submit"
        variant="contained"
        fullWidth
        sx={{ marginTop: "12px" }}
      >
        제출
      </BlueRoundedButton>
    </Box>
  );
};

// 이메일 셀렉터를 제외한 동적 텍스트필드 생성
export const generateTextFields = ({
  formFields,
  onSubmit,
  register,
  errors,
  watch,
}) => {
  return (
    <Box component="form" onSubmit={onSubmit}>
      {formFields.map((field) =>
        generateFormFields(field, register, errors, watch)
      )}
      <BlueRoundedButton
        type="submit"
        variant="contained"
        fullWidth
        sx={{ marginTop: "12px" }}
      >
        제출
      </BlueRoundedButton>
    </Box>
  );
};
