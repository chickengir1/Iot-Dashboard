import { mainContentConfig } from "../../styles/layoutConfig";
import {
  Box,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { BlueRoundedButton, ServeContent } from "../../styles";
import UserCard from "../../components/usercard/UserCardContainer";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import Sidebar from "../../components/sidebar/SidebarContainer";
import Modal from "../../components/modal/ModalContainer";
import TodoListContainer from "../../components/todolist/TodoListContainer";

export const TodoForm = ({ formFields, onSubmit, combined }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = combined;

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>투두 리스트</DialogTitle>
      <DialogContent>
        <TextField
          {...register("todo", {
            required: `${formFields.label}을 입력하세요.`,
          })}
          label={formFields.label}
          placeholder={formFields.label}
          type={formFields.type}
          fullWidth
          margin="normal"
          sx={{ maxHeight: "65px" }}
          error={!!errors.todo}
          helperText={errors.todo ? errors.todo.message : ""}
        />
        <BlueRoundedButton type="submit" fullWidth>
          Submit
        </BlueRoundedButton>
      </DialogContent>
    </Box>
  );
};

const TodoUi = ({
  isDesktop,
  formFields,
  onSubmit,
  onOpen,
  onClose,
  combined,
  todos,
  setTodos,
}) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);
  return (
    <div>
      <Modal onClose={onClose}>
        <TodoForm
          formFields={formFields}
          onSubmit={onSubmit}
          combined={combined}
        />
      </Modal>

      <Layout>
        <Sidebar />
        <MainLayout>
          <UserCard />
          <Typography textAlign="center">투두 리스트</Typography>
          <TodoListContainer todos={todos} setTodos={setTodos} />
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
