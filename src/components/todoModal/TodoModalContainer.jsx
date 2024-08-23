import TodoModalUi from "./todoModalUi";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setModalType } from "../../redux/actions/modalAction";
import { get, save } from "../../utils/localStorage";
import { todoFields as fields } from "../../utils/formFields";
import { getResponseMessage } from "../../error/getResponseMessage";
import { handleFormSubmit } from "../../utils/handleSubmit";

const TodoModalContainer = ({ setNotification, todos, setTodos }) => {
  const dispatch = useDispatch();
  const combined = useForm();

  const getFormattedDate = () => {
    const date = new Date();
    const koreanDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
    return koreanDate.toISOString().split("T")[0];
  };

  const onSubmit = (formValues) => {
    const formData = {
      id: Date.now(),
      date: getFormattedDate(),
      description: formValues.todo,
      isFinish: false,
    };

    const postData = async (data) => {
      try {
        const currentTodos = get("todos") || [];
        const updatedTodos = [...currentTodos, data];
        save("todos", updatedTodos);
        return { message: "할일 추가 완료!" };
      } catch (error) {
        throw new Error(error);
      }
    };

    const todoresponse = handleFormSubmit({
      formData,
      postData,
      setNotification,
      dispatch,
      actionType: "todo",
      successMessageHandler: getResponseMessage,
      errorMessageHandler: (error) => getResponseMessage(null, error),
    });

    if (todoresponse) {
      const updatedTodos = [...todos, formData];
      console.log("updatedTodos", updatedTodos);
      setTodos(updatedTodos);
      save("todos", updatedTodos);
      dispatch(setModalType());
    }
  };
  return (
    <TodoModalUi formFields={fields} onSubmit={onSubmit} combined={combined} />
  );
};

export default TodoModalContainer;
