import TodoListUi from "./TodoListUi";
import { save } from "../../utils/localStorage";

const TodoListContainer = ({ todos, setTodos }) => {
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isFinish: !todo.isFinish } : todo
    );
    setTodos(updatedTodos);
    save("todos", updatedTodos);
  };

  const handleDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      save("todos", updatedTodos);
    }
  };

  return (
    <TodoListUi todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
  );
};

export default TodoListContainer;
