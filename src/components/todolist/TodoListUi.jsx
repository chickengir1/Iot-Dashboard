import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const TodoListUi = ({ todos }) => {
  const todoStyled = {
    flexGrow: 1,
    padding: 1,
    border: "1px solid #ccc",
    borderRadius: 1,
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography variant="subtitle1">To do list</Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: 2, gap: 1 }}>
        {todos.map((todo, index) => (
          <Box sx={todoStyled} key={index}>
            {todo ? (
              <Typography variant="body2">{todo.description}</Typography>
            ) : (
              <IconButton>
                <AddIcon />
              </IconButton>
            )}
          </Box>
        ))}
        {/* 세팅은 넣지 말고, To do list(title)누르면 todopage로 이동하도록*/}
        {/* <Box sx={todoStyled}>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Box> */}
      </Box>
    </Box>
  );
};

export default TodoListUi;
