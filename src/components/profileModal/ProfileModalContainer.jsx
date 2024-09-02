import { closeModal } from "@redux/actions/modalAction";
import { useDispatch, useSelector } from "react-redux";
import ProfileModalUi from "./profileModalUi";
import { profileUpdateFormFields as fields } from "@utils/formFields";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { handleFormSubmit } from "@utils/handleSubmit";
import usePutRequest from "@hooks/usePutRequest";
import { API_PATHS } from "@utils/apiMap";
import { getResponseMessage } from "@error/getResponseMessage";
import { delay } from "@utils/commonUtils";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ProfileModalContainer = ({ setNotification }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const combined = useForm();

  const openModal = useSelector((state) => state.modal.openModal);
  const { putData } = usePutRequest(API_PATHS.REMOVE_USER);

  const handleClose = () => {
    dispatch(closeModal());
  };

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;
    const formData = {
      id: formValues.id,
      password: formValues.password,
      email: completeEmail,
    };

    dispatch(startLoading());

    try {
      const response = await handleFormSubmit({
        formData,
        postData: putData,
        setNotification,
        dispatch,
        actionType: "profileUpdate",
        successMessageHandler: getResponseMessage,
        errorMessageHandler: (error) => getResponseMessage(null, error),
      });

      console.log(response);

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
    <ProfileModalUi
      formFields={fields}
      open={!!openModal}
      combined={combined}
      onSubmit={onSubmit}
      onClose={handleClose}
    />
  );
};

export default ProfileModalContainer;
