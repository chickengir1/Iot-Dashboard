import { setFormData } from "../redux/actions/formAction";

// 폼 제출을 위한 유틸리티 함수
export const handleFormSubmit = async ({
  formData,
  postData,
  setNotification,
  dispatch,
  actionType,
  successMessageHandler,
  errorMessageHandler,
}) => {
  dispatch(setFormData(actionType, formData));

  try {
    const response = await postData(formData);

    const successMessage = successMessageHandler(response);
    setNotification({ message: successMessage, type: "success", open: true });

    return response;
  } catch (error) {
    const errorMessage = errorMessageHandler(error);
    setNotification({ message: errorMessage, type: "error", open: true });

    return null;
  }
};
