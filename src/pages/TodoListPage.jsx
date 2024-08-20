import {
  Box,
  Button,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
import { closeModal, setModalType } from "../redux/actions/modalAction";
import { todoFields } from "../utils/formFields";
import { generateFormFields } from "../utils/formUtils";

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

const TodoForm = ({ setTodos, onSubmit, register, errors }) => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const getFormattedDate = () => {
    const date = new Date();
    const koreanDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
    return koreanDate.toISOString().split("T")[0];
  };

  const handleSubmit = () => {
    const todos = loadTodos();
    const newTodo = {
      id: Date.now(),
      date: getFormattedDate(),
      description: todoText,
      isFinish: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setTodoText("");
    dispatch(closeModal()); // 모달 닫기
  };

  return (
    <ModalContainer>
      <DialogTitle>Todo List</DialogTitle>
      <DialogContent>오늘 할 일을 입력해주세요.</DialogContent>
      {/* {todoFields.map((field) => generateFormFields(field, register, errors))} */}
      <TextField
        value={todoText}
        onChange={handleInputChange}
        placeholder="할 일을 입력하세요"
      />
      <BlueRoundedButton type="submit" onClick={handleSubmit}>
        Submit
      </BlueRoundedButton>
    </ModalContainer>
  );
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

  const handleToggle = (id) => {
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

  const handleAddToDo = () => {
    dispatch(setModalType("todo"));
  };

  const handleClose = () => {
    dispatch(closeModal());
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
      <TodoForm setTodos={setTodos} />
    </>
  );
};

export default TodoListPage;
