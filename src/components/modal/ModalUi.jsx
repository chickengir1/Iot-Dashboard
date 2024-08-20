import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  Modal,
  TextField,
} from "@mui/material";
import React from "react";

const ModalUi = ({ open, onClose }) => {
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
      <Box sx={styles.modalLayout}>
        <DialogTitle>Todo List</DialogTitle>
        <DialogContent>오늘 할 일을 입력해주세요.</DialogContent>
        <TextField />
        <Button type="submit">Submit</Button>
      </Box>
    </Modal>
  );
};

export default ModalUi;
