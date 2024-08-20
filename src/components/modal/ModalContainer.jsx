import { useState } from "react";
import ModalUi from "./ModalUi";
import { loadTodos, saveTodos } from "../../utils/todoStorage";

const ModalContainer = ({ open, onClose }) => {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleSubmit = () => {
    const todos = loadTodos();
    const newTodo = {
      date: Date.now(),
      description: todoText,
      isFinish: false,
    };

    saveTodos([...todos, newTodo]);
    setTodoText("");
    onClose();
  };

  return (
    <ModalUi
      open={open}
      onClose={onClose}
      todoText={todoText}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  );
};

export default ModalContainer;
