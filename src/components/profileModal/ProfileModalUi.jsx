import { Box, DialogContent, Modal, Typography } from "@mui/material";
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
    minWidth: "350px",
    width: "30%",
    padding: 1,
    borderRadius: 2,
    overflow: "hidden",
  },
};

const ProfileModalUi = ({ open, onClose, combined, formFields, onSubmit }) => {
  const {
    register,
    formState: { errors },
    watch,
  } = combined;

  return (
    <Modal open={open} onClose={onClose} sx={styles.modalBackdrop}>
      <Box sx={styles.modalLayout}>
        <Typography sx={{ padding: "20px 24px", fontWeight: "bold" }}>
          프로필 정보 수정
        </Typography>
        <DialogContent sx={{ paddingTop: 2 }}>
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
