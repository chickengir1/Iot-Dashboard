import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import {
  DesktopLayout,
  BlueRoundedButton,
  ServeContent,
  MobileLayout,
} from "../styles/index";
import React from "react";
import UserCard from "../components/usercard/UserCardContainer";
import {
  AddCircleOutlineOutlined,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
} from "@mui/icons-material";
import Sidebar from "../components/sidebar/SidebarContainer";
import ListItem from "../components/listitem/ListItemContainer";

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

const TodoComponent = ({ date, description, isFinish }) => (
  <ListItem
    title={date}
    description={description}
    icon={isFinish ? <CheckBoxOutlined /> : <CheckBoxOutlineBlank />}
  />
);

const AddTodoButton = () => (
  <BlueRoundedButton
    variant="contained"
    fullWidth
    endIcon={<AddCircleOutlineOutlined />}
  >
    할 일 추가하기
  </BlueRoundedButton>
);

const MobileTodoList = () => (
  <MobileLayout>
    <UserCard />
    <Typography textAlign="center">투두 리스트</Typography>
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
  </MobileLayout>
);

const DesktopTodoList = () => (
  <DesktopLayout>
    <Sidebar />
    <Box sx={mainContentStyle}>
      <Grid container columnSpacing={2}>
        <Grid item xs={6}>
          <UserCard />
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", mb: 2 }}>
          <AddTodoButton />
        </Grid>
      </Grid>
      <Typography textAlign="center" variant="h6" gutterBottom>
        투두 리스트
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
    <ServeContent />
  </DesktopLayout>
);

const TodoListPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopTodoList /> : <MobileTodoList />;
};

export default TodoListPage;
