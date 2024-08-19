import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";
import EmailSelectorContainer from "../components/emailSelector/EmailSelectorContainer";
import usePostRequest from "../hooks/usePostRequest";
import { getResponseMessage } from "../error/getResponseMessage";
import Notification from "../components/notification/NotificationContainer";
import { handleFormSubmit } from "../utils/handleSubmit";

const FindIdForm = ({ onSubmit }) => (
  <Box component="form" onSubmit={onSubmit}>
    <EmailSelectorContainer />
    <BlueRoundedButton
      type="submit"
      variant="contained"
      fullWidth
      sx={{ marginTop: "12px" }}
    >
      아이디 찾기
    </BlueRoundedButton>
  </Box>
);

export const MobileFindId = ({ onSubmit }) => (
  <MobileEntryLayout>
    <Box sx={{ border: "solid 1px #ddd", minHeight: "150px" }}>
      <img alt="이미지" />
    </Box>
    <FindIdForm onSubmit={onSubmit} />
    <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
  </MobileEntryLayout>
);

export const DesktopFindId = ({ onSubmit }) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
        <img alt="이미지" />
      </Box>
      <FindIdForm onSubmit={onSubmit} />
      <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const FindIDPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const combined = useForm();
  const [notification, setNotification] = useState({
    message: null,
    type: "success",
    open: false,
  });

  const { postData } = usePostRequest("/api/auth/find-id");

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;

    const formData = {
      email: completeEmail,
    };

    await handleFormSubmit({
      formData,
      postData,
      setNotification,
      dispatch,
      actionType: "findId",
      successMessageHandler: getResponseMessage,
      errorMessageHandler: (error) => getResponseMessage(null, error),
    });
  };

  return (
    <FormProvider {...combined}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      {isDesktop ? (
        <DesktopFindId onSubmit={combined.handleSubmit(onSubmit)} />
      ) : (
        <MobileFindId onSubmit={combined.handleSubmit(onSubmit)} />
      )}
    </FormProvider>
  );
};

export default FindIDPage;
