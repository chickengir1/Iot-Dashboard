import TodoListUi from "./TodoListUi";
import { useSelector } from "react-redux";

const TodoListContainer = () => {
  const todos = useSelector((state) => state.todo.todos);

  // isFinish가 false이면서 투두 최대 4개까지 필터링
  const maxTodos = 4;
  const filteredTodos = todos
    .filter((todo) => !todo.isFinish)
    .slice(0, maxTodos);

  const blanks = Array(maxTodos - filteredTodos.length).fill(null);

  const combinedTodos = [...filteredTodos, ...blanks];

  return <TodoListUi todos={combinedTodos} />;
};

export default TodoListContainer;
