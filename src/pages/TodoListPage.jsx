import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import UserCard from "../components/usercard/UserCardUi";
import {
  AddCircleOutlineOutlined,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
} from "@mui/icons-material";
import Sidebar from "../components/sidebar/sidebarUi";

const todos = [
  {
    date: "2024-08-13",
    description: "꽃에 물주기",
    isFinish: true,
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
  desktopLayout: {
    padding: 2,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    height: "96vh",
  },
  mainContentStyle: {
    padding: 2,
    marginLeft: 2,
    border: "1px solid #ddd",
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 2,
  },
  serveContentStyle: {
    minWidth: "220px",
    maxWidth: "220px",
    marginLeft: 2,
    border: "1px solid #ddd",
    padding: 2,
    borderRadius: 2,
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
        {isFinish ? <CheckBoxOutlined /> : <CheckBoxOutlineBlank />}
      </IconButton>
    </Box>
  );
};

const AddTodoButton = () => {
  return (
    <Button
      variant="contained"
      fullWidth
      endIcon={<AddCircleOutlineOutlined />}
      sx={styles.buttonStyle}
    >
      할 일 추가하기
    </Button>
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
    <AddTodoButton />
    <Sidebar />
  </Box>
);

const DesktopTodoList = () => {
  return (
    <Box sx={styles.desktopLayout}>
      <Sidebar />
      <Box sx={styles.mainContentStyle}>
        <Grid container columnSpacing={2}>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <UserCard />
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            sx={{ display: "flex", mb: 2 }}
          >
            <AddTodoButton />
          </Grid>
        </Grid>
        <Typography textAlign="center" variant="h6" gutterBottom>
          {"투두 리스트"}
        </Typography>
        {todos.map((todo, index) => (
          <TodoComponent
            key={index}
            date={todo.date}
            description={todo.description}
            isFinish={todo.isFinish}
          />
        ))}
      </Box>
      <Box sx={styles.serveContentStyle}>{/* 이미지 아무거나 */}</Box>
    </Box>
  );
};

const TodoListPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopTodoList /> : <MobileTodoList />;
};

export default TodoListPage;
