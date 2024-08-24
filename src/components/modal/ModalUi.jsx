import { Box, Modal } from "@mui/material";

const ModalUi = ({ open, onClose, children }) => {
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
  return (
    <Modal open={open} onClose={onClose} sx={styles.modalBackdrop}>
      <Box sx={styles.modalLayout}>{children}</Box>
    </Modal>
  );
};

export default ModalUi;
