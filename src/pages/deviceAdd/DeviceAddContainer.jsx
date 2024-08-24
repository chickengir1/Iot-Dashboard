import React, { useState } from "react";
import DeviceAddUi from "./DeviceAddUi";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "@utils/commonUtils";
import { FormProvider, useForm } from "react-hook-form";
import Notification from "@components/notification/NotificationContainer";

const DeviceAddContainer = () => {
  const [notification, setNotification] = useState({
    message: "success",
    type: "",
    open: false,
  });
  const isDesktop = useMediaQuery(breakpoints.mainContent);
  const combined = useForm();

  return (
    <FormProvider {...combined}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <DeviceAddUi isDesktop={isDesktop} />
    </FormProvider>
  );
};

export default DeviceAddContainer;
