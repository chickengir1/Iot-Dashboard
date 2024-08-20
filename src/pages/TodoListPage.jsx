import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {
  DesktopLayout,
  BlueRoundedButton,
  ServeContent,
  MobileLayout,
} from "../styles/index";
import React, { useEffect, useState } from "react";
import UserCard from "../components/usercard/UserCardContainer";
import {
  AddCircleOutlineOutlined,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
} from "@mui/icons-material";
import Sidebar from "../components/sidebar/SidebarContainer";
import ListItem from "../components/listitem/ListItemContainer";
import { useDispatch, useSelector } from "react-redux";
import ModalContainer from "../components/modal/ModalContainer";
import { loadTodos, saveTodos } from "../utils/todoStorage";

// 페이지 고유 스타일
const mainContentStyle = {
  padding: 2,
  marginLeft: 2,
  border: "1px solid #ddd",
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: 2,
};

const TodoComponent = ({ date, description, isFinish, onDelete, onToggle }) => (
  <Box onClick={onToggle} onContextMenu={onDelete}>
    <ListItem
      title={date}
      description={description}
      icon={isFinish ? <CheckBoxOutlined /> : <CheckBoxOutlineBlank />}
    />
  </Box>
);

const AddTodoButton = ({ onClick }) => (
  <BlueRoundedButton
    variant="contained"
    fullWidth
    endIcon={<AddCircleOutlineOutlined />}
    onClick={onClick}
  >
    할 일 추가하기
  </BlueRoundedButton>
);

const MobileTodoList = ({ todos, onAddToDo, onDelete, onToggle }) => (
  <MobileLayout>
    <UserCard />
    <Typography textAlign="center">투두 리스트</Typography>
    {todos.map((todo, index) => (
      <TodoComponent
        key={index}
        date={todo.date}
        description={todo.description}
        isFinish={todo.isFinish}
        onDelete={() => onDelete(todo.id)}
        onToggle={() => onToggle(todo.id)}
      />
    ))}
    <AddTodoButton onClick={onAddToDo} />
    <Sidebar />
  </MobileLayout>
);

const DesktopTodoList = ({ todos, onAddToDo, onDelete, onToggle }) => (
  <DesktopLayout>
    <Sidebar />
    <Box sx={mainContentStyle}>
      <Grid container columnSpacing={2}>
        <Grid item xs={6}>
          <UserCard />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", mb: 2 }}>
          <AddTodoButton onClick={onAddToDo} />
        </Grid>
      </Grid>
      <Typography textAlign="center" variant="h6" gutterBottom>
        투두 리스트
      </Typography>
      {todos.map((todo) => (
        <TodoComponent
          key={todo.id}
          date={todo.date}
          description={todo.description}
          isFinish={todo.isFinish}
          onDelete={() => onDelete(todo.id)}
          onToggle={() => onToggle(todo.id)}
        />
      ))}
    </Box>
    <ServeContent />
  </DesktopLayout>
);

const TodoListPage = () => {
  const [todos, setTodos] = useState(loadTodos());
  const isDesktop = useMediaQuery("(min-width:1280px)");
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleToggle = (id) => {
    console.log("toggle");
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isFinish: !todo.isFinish } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const handleDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      saveTodos(updatedTodos);
    }
  };

  useEffect(() => {
    console.log("Modal open state:", open);
  }, [open]);

  const handleAddToDo = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {isDesktop ? (
        <DesktopTodoList
          todos={todos}
          onAddToDo={handleAddToDo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ) : (
        <MobileTodoList
          todos={todos}
          onAddToDo={handleAddToDo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      )}
      <ModalContainer open={open} onClose={handleClose} setTodos={setTodos} />
    </>
  );
};

export default TodoListPage;
