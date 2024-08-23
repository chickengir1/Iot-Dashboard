import { Box, DialogContent, DialogTitle, TextField } from "@mui/material";
import { BlueRoundedButton } from "../../styles";

const TodoModalUi = ({ formFields, onSubmit, combined }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = combined;

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>투두 리스트</DialogTitle>
      <DialogContent>
        <TextField
          {...register("todo", {
            required: `${formFields.label}을 입력하세요.`,
          })}
          label={formFields.label}
          placeholder={formFields.label}
          type={formFields.type}
          fullWidth
          margin="normal"
          sx={{ maxHeight: "65px" }}
          error={!!errors.todo}
          helperText={errors.todo ? errors.todo.message : ""}
        />
        <BlueRoundedButton type="submit" fullWidth>
          Submit
        </BlueRoundedButton>
      </DialogContent>
    </Box>
  );
};

export default TodoModalUi;
