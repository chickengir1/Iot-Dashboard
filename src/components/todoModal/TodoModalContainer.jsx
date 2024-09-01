import TodoModalUi from "./todoModalUi";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, setModalType } from "@redux/actions/modalAction";
import { get, save } from "@utils/localStorage";
import { todoFields as fields } from "@utils/formFields";
import { getResponseMessage } from "@error/getResponseMessage";
import { handleFormSubmit } from "@utils/handleSubmit";
import { getFormattedDate } from "@utils/dateUtils";

const TodoModalContainer = ({ setNotification, todos, setTodos }) => {
  const dispatch = useDispatch();
  const { reset, ...combined } = useForm();

  const openModal = useSelector((state) => state.modal.openModal);

  const handleClose = () => {
    dispatch(closeModal());
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
        const updatedTodos = [data, ...currentTodos];
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
      const updatedTodos = [formData, ...todos];
      setTodos(updatedTodos);
      save("todos", updatedTodos);
      dispatch(setModalType());
      reset();
    }
  };

  return (
    <TodoModalUi
      formFields={fields}
      onSubmit={onSubmit}
      combined={combined}
      open={!!openModal}
      onClose={handleClose}
    />
  );
};

export default TodoModalContainer;
