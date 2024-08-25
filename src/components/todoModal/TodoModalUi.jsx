import {
  Box,
  DialogContent,
  DialogTitle,
  Modal,
  TextField,
} from "@mui/material";
import { BlueRoundedButton } from "@styles/index";
const styles = {
  modalBackdrop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalLayout: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    minWidth: "300px",
    width: "30%",
    padding: 2,
    borderRadius: 2,
  },
};

const TodoModalUi = ({ formFields, onSubmit, combined, open, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = combined;

  return (
    <Modal open={open} onClose={onClose} sx={styles.modalBackdrop}>
      <Box
        sx={styles.modalLayout}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
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
    </Modal>
  );
};

export default TodoModalUi;
