import { Box, DialogContent, DialogTitle, Modal } from "@mui/material";
import { generateFields } from "@utils/generateFields";
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

const ProfileModalUi = ({ open, onClose, combined, formFields, onSubmit }) => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
    watch,
  } = combined;

  return (
    <Modal open={open} onClose={onClose} sx={styles.modalBackdrop}>
      <Box sx={styles.modalLayout}>
        <DialogTitle>프로필 정보 수정</DialogTitle>
        <DialogContent>
          {generateFields({
            formFields,
            onSubmit: combined.handleSubmit(onSubmit),
            register,
            errors,
            watch,
          })}
        </DialogContent>
      </Box>
    </Modal>
  );
};

export default ProfileModalUi;
