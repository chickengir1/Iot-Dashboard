import useNotification from "@hooks/useNotification";
import { API_PATHS } from "@utils/apiMap";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import usePostRequest from "@hooks/usePostRequest";
import { handleFormSubmit } from "@utils/handleSubmit";
import { getResponseMessage } from "@error/getResponseMessage";
import { signupFormFields as fields } from "@utils/formFields";
import SignUpUi from "./SignUpUi";
import { delay, breakpoints } from "@utils/commonUtils";
import Notification from "@components/notification/NotificationContainer";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";

const SignUpContainer = () => {
  const { notification, setNotification } = useNotification();
  const isDesktop = useMediaQuery(breakpoints.Account);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const combined = useForm();
  const { postData } = usePostRequest(API_PATHS.REGISTER);

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;
    const formData = {
      id: formValues.id,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      email: completeEmail,
    };

    dispatch(startLoading());

    try {
      const response = await handleFormSubmit({
        formData,
        postData,
        setNotification,
        dispatch,
        actionType: "signup",
        successMessageHandler: getResponseMessage,
        errorMessageHandler: (error) => getResponseMessage(null, error),
      });

      if (response.message === "Success") {
        await delay(1000);
        navigate("/");
      }
    } catch (error) {
      console.error(error.cause);
    } finally {
      dispatch(stopLoading());
    }
  };

  return (
    <FormProvider {...combined}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <SignUpUi
        combined={combined}
        isDesktop={isDesktop}
        formFields={fields}
        onSubmit={combined.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

export default SignUpContainer;
