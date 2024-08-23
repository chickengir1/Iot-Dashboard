import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "../listitem/ListItemContainer";
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material";

const TodoComponent = ({
  id,
  date,
  description,
  isFinish,
  onToggle,
  onDelete,
}) => (
  <Box
    onClick={() => onToggle(id)}
    onContextMenu={(e) => {
      e.preventDefault();
      onDelete(id);
    }}
    marginBottom={2}
  >
    <ListItem
      title={date}
      description={description}
      icon={isFinish ? <CheckBoxOutlined /> : <CheckBoxOutlineBlank />}
    />
  </Box>
);

const TodoListUi = ({ todos, onToggle, onDelete }) => {
  return (
    <Box
      sx={{
        height: "60vh",
        overflowY: "auto",
        marginBottom: 2,
      }}
    >
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoComponent
            key={todo.id}
            id={todo.id}
            date={todo.date}
            description={todo.description}
            isFinish={todo.isFinish}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
    </Box>
  );
};

export default TodoListUi;
