import React, { useState } from "react";
import DeviceAddUi from "./DeviceAddUi";
import { useMediaQuery } from "@mui/material";
import { breakpoints, delay } from "@utils/commonUtils";
import { FormProvider, useForm } from "react-hook-form";
import Notification from "@components/notification/NotificationContainer";
import { useDispatch } from "react-redux";
import usePostRequest from "@hooks/usePostRequest";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { handleFormSubmit } from "@utils/handleSubmit";
import { getResponseMessage } from "@error/getResponseMessage";
import { useNavigate } from "react-router-dom";
import { deviceFields as fields } from "@utils/formFields";

const DeviceAddContainer = () => {
  const [notification, setNotification] = useState({
    message: "success",
    type: "",
    open: false,
  });

  const isDesktop = useMediaQuery(breakpoints.mainContent);
  const combined = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { postData } = usePostRequest("/api/devices");

  const onSubmit = async (formValues) => {
    const formData = {
      deviceId: formValues.deviceId,
      deviceName: formValues.deviceName,
      description: formValues.description,
    };

    dispatch(startLoading());

    try {
      const response = await handleFormSubmit({
        formData,
        postData,
        setNotification,
        dispatch,
        actionType: "addDevice",
        successMessageHandler: getResponseMessage,
        errorMessageHandler: (error) => getResponseMessage(null, error),
      });
      if (response.message === "디바이스 생성이 완료되었습니다.") {
        await delay(1000);
        navigate("/devices");
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
      <DeviceAddUi
        combined={combined}
        onSubmit={combined.handleSubmit(onSubmit)}
        isDesktop={isDesktop}
        fields={fields}
      />
    </FormProvider>
  );
};

export default DeviceAddContainer;
