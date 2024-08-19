import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/actions/formAction";
import { Box, useMediaQuery } from "@mui/material";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "../styles/index";
import { signupFormFields } from "../utils/formFields";
import { generateFields } from "../utils/generateFields";
import usePostRequest from "../hooks/usePostRequest";

export const MobileRegister = ({
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => (
  <MobileEntryLayout>
    <Box sx={{ border: "solid 1px #ddd", minHeight: "250px" }}>
      <img alt="이미지" />
    </Box>
    {generateFields({ formFields, onSubmit, register, errors, watch })}
    <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
  </MobileEntryLayout>
);

export const DesktopRegister = ({
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={{ border: "solid 1px #ddd", minHeight: "250px" }}>
        <img alt="이미지" />
      </Box>
      {generateFields({ formFields, onSubmit, register, errors, watch })}
      <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const combined = useForm();
  const { watch } = combined;

  const { postData, data } = usePostRequest("/api/auth/register");

  const onSubmit = (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;

    const formData = {
      id: formValues.id,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      email: completeEmail,
    };

    dispatch(setFormData("signup", formData));

    postData(formData)
      .then((response) => {
        if (response && typeof response === "object" && response.message) {
          console.log("서버 응답:", response.message);
        }
      })
      .catch((error) => {
        if (
          error.response &&
          error.response.data &&
          typeof error.response.data === "object"
        ) {
          console.error("서버 에러 메시지:", error.response.data.error);
        }
      });
  };

  return (
    <FormProvider {...combined}>
      {data ? (
        <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
          <h4>성공 {/*임시로 처리한거에요*/}</h4>
        </Box>
      ) : (
        <>
          {isDesktop ? (
            <DesktopRegister
              formFields={signupFormFields}
              onSubmit={combined.handleSubmit(onSubmit)}
              register={combined.register}
              errors={combined.formState.errors}
              watch={watch}
            />
          ) : (
            <MobileRegister
              formFields={signupFormFields}
              onSubmit={combined.handleSubmit(onSubmit)}
              register={combined.register}
              errors={combined.formState.errors}
              watch={watch}
            />
          )}
        </>
      )}
    </FormProvider>
  );
};

export default SignUpPage;

// 각 페이지별로 로직 / UI 분리 해야함 수요일날 회의
