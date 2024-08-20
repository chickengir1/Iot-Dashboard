import { useState } from "react";
import ModalUi from "./ModalUi";
import { loadTodos, saveTodos } from "../../utils/todoStorage";

const ModalContainer = ({ open, onClose }) => {
  const [todoText, setTodoText] = useState("");

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const getFormattedDate = () => {
    const date = new Date();

    const koreanDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);

    return koreanDate.toISOString().split("T")[0];
  };

  const handleSubmit = () => {
    const todos = loadTodos();
    const newTodo = {
      id: Date.now(),
      date: getFormattedDate(),
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
