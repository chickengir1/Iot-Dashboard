import { Box } from "@mui/material";
import ListItem from "@components/listitem/ListItemContainer";
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material";
import { isEmpty } from "@utils/isEmpty";

const todoListStyles = {
  container: (height) => ({
    height: height,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: 2,
    borderRadius: "8px",
    overflowY: "auto",
    marginBottom: 2,
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
  }),
  todoItem: {
    marginBottom: 2,
  },
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
    sx={todoListStyles.todoItem}
  >
    <ListItem
      title={date}
      description={description}
      icon={isFinish ? <CheckBoxOutlined /> : <CheckBoxOutlineBlank />}
    />
  </Box>
);

const TodoListUi = ({ todos, onToggle, onDelete, height }) => {
  return (
    <Box sx={todoListStyles.container(height)}>
      {!isEmpty(todos) &&
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
