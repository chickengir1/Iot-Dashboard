import { mainContentConfig } from "../../styles/layoutConfig";
import { Box, Typography } from "@mui/material";
import { BlueRoundedButton, ServeContent } from "../../styles";
import UserCard from "../../components/usercard/UserCardContainer";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import Sidebar from "../../components/sidebar/SidebarContainer";
import Modal from "../../components/modal/ModalContainer";
import TodoListContainer from "../../components/todolist/TodoListContainer";
import TodoModal from "../../components/todoModal/todoModalContainer";

const TodoUi = ({
  isDesktop,
  onOpen,
  onClose,
  setNotification,
  todos,
  setTodos,
}) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);
  return (
    <div>
      <Modal onClose={onClose}>
        <TodoModal
          setNotification={setNotification}
          todos={todos}
          setTodos={setTodos}
        />
      </Modal>

      <Layout>
        <Sidebar />
        <MainLayout>
          <UserCard />
          <Box sx={{ flex: "1 1 100px", aspectRatio: "1/1" }}>
            <Typography textAlign="center">투두 리스트</Typography>
            <TodoListContainer todos={todos} setTodos={setTodos} />
          </Box>
          <BlueRoundedButton
            variant="contained"
            fullWidth
            endIcon={<AddCircleOutlineOutlined />}
            onClick={onOpen}
          >
            할 일 추가하기
          </BlueRoundedButton>
        </MainLayout>
        {isDesktop && <ServeContent />}
      </Layout>
    </div>
  );
};

export default TodoUi;
