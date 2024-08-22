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
import ListItem from "../../components/listitem/ListItemContainer";

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

const TodoUi = ({
  isDesktop,
  formFields,
  onSubmit,
  onOpen,
  onClose,
  combined,
  onDelete,
  onToggle,
  todos,
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
