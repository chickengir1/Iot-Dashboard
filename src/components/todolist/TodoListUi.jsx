import { Box } from "@mui/material";
import ListItem from "@components/listitem/ListItemContainer";
import { isEmpty } from "@utils/isEmpty";

const todoListStyles = {
  container: (height) => ({
    height: height,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    padding: 2,
    border: "1px solid rgba(168, 213, 186, 0.7)",

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
    <ListItem date={date} description={description} isFinish={isFinish} />
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
