import { Box } from "@mui/material";
import ListItem from "@components/listitem/ListItemContainer";
import { CheckBoxOutlineBlank, CheckBoxOutlined } from "@mui/icons-material";

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

const TodoListUi = ({ todos, onToggle, onDelete, height }) => {
  return (
    <Box
      sx={{
        height: height,
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
  );
};

export default TodoListUi;
