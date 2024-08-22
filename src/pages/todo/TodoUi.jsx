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
import {
  AddCircleOutlineOutlined,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
} from "@mui/icons-material";
import Sidebar from "../../components/sidebar/SidebarContainer";
import Modal from "../../components/modal/ModalContainer";
import { useForm } from "react-hook-form";
import ListItem from "../../components/listitem/ListItemContainer";

export const TodoForm = ({ formFields, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>투두 리스트</DialogTitle>
      <DialogContent>
        <TextField
          {...register("todo", { required: "할 일을 입력하세요." })}
          label={formFields.label}
          placeholder={formFields.label}
          type={formFields.type}
          fullWidth
          margin="normal"
          sx={{ maxHeight: "65px" }}
          error={!!errors.todo}
          helperText={errors.todo ? errors.todo.message : ""}
        />
        <BlueRoundedButton type="submit">Submit</BlueRoundedButton>
      </DialogContent>
    </Box>
  );
};

const TodoComponent = ({ date, description, isFinish }) => (
  <ListItem
    title={date}
    description={description}
    icon={isFinish ? <CheckBoxOutlined /> : <CheckBoxOutlineBlank />}
  />
);

const TodoUi = ({
  isDesktop,
  formFields,
  onSubmit,
  onOpen,
  onClose,
  onDelete,
  onToggle,
  todos,
}) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);
  return (
    <div>
      <Modal onClose={onClose}>
        <TodoForm formFields={formFields} onSubmit={onSubmit} />
      </Modal>

      <Layout>
        <Sidebar />
        <MainLayout>
          <UserCard />
          <Typography textAlign="center">투두 리스트</Typography>
          {todos.length > 0 &&
            todos.map((todo) => (
              <Box
                onClick={() => onToggle(todo.id)}
                onContextMenu={() => onDelete(todo.id)}
                key={todo.id}
              >
                <TodoComponent
                  date={todo.date}
                  description={todo.description}
                  isFinish={todo.isFinish}
                />
              </Box>
            ))}

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
