import {
  Box,
  Button,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import UserCard from "../components/usercard/UserCardUi";
import {
  AddCircleOutlineOutlined,
  CheckBoxOutlineBlank,
  CheckBoxOutlineBlankOutlined,
  CheckBoxOutlined,
} from "@mui/icons-material";
import Sidebar from "../components/sidebar/sidebarUi";

const todos = [
  {
    date: "2024-08-13",
    description: "꽃에 물주기",
    isFinish: false,
  },
  {
    date: "2024-08-13",
    description: "씨앗 심기",
    isFinish: true,
  },
  {
    date: "2024-08-13",
    description: "칭찬 해주기",
    isFinish: false,
  },
];

// 디바이스랑 거의 같음.
const styles = {
  mobileLayout: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    padding: 2,
    gap: 1,
  },
  todoStyled: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    borderRadius: 2,
    boxShadow: 1,
    bgcolor: "background.paper",
  },
  buttonStyle: {
    backgroundColor: "#64B8FF",
    color: "#fff",
    borderRadius: 3,
    padding: "10px 16px",
    border: "2px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const TodoComponent = ({ date, description, isFinish }) => {
  return (
    <Box sx={styles.todoStyled}>
      <Box flexGrow={1}>
        <Typography variant="body1" fontWeight="bold">
          {date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
      <IconButton>
        {isFinish ? <CheckBoxOutlined /> : <CheckBoxOutlineBlankOutlined />}
      </IconButton>
    </Box>
  );
};

const MobileTodoList = () => (
  <Box sx={styles.mobileLayout}>
    <UserCard />
    <Typography textAlign="center">{"투두 리스트"}</Typography>
    {todos.map((todo, index) => (
      <TodoComponent
        key={index}
        date={todo.date}
        description={todo.description}
        isFinish={todo.isFinish}
      />
    ))}
    <Button
      variant="contained"
      fullWidth
      endIcon={<AddCircleOutlineOutlined />}
      sx={styles.buttonStyle}
    >
      할 일 추가하기
    </Button>
    <Sidebar />
  </Box>
);

const TodoListPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <MobileTodoList /> : <MobileTodoList />;
};

export default TodoListPage;
