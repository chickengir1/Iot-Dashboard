import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";

const TodoListUi = () => {
  const todoStyled = {
    flexGrow: 1,
    p: 1,
    border: "1px solid #ccc",
    borderRadius: 1,
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle1">To do list</Typography>
      <Box sx={{ display: "flex", alignItems: "center", mt: 2, gap: "5px" }}>
        <Box sx={todoStyled}>
          <Typography variant="body2">todo title</Typography>
        </Box>
        <Box sx={todoStyled}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={todoStyled}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Box>
        <Box sx={todoStyled}>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoListUi;
