import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Box, useMediaQuery } from "@mui/material";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/actions/formAction";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "../styles/index";
import { findPasswordFormFields } from "../utils/formFields";
import { generateFields } from "../utils/generateFields";

const styles = {
  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

export const MobileFindPassword = ({
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => (
  <MobileEntryLayout>
    <Box sx={styles.imageLayout}>
      <img alt="이미지" />
    </Box>
    {generateFields({ formFields, onSubmit, register, errors, watch })}
    <FooterLinks
      text1={"아이디/비밀번호 찾기"}
      link1={"/find-account"}
      text2={"가입하러 가기"}
      link2={"/register"}
    />
  </MobileEntryLayout>
);

export const DesktopFindPassword = ({
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      {generateFields({ formFields, onSubmit, register, errors, watch })}
      <FooterLinks
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const FindPasswordPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const combined = useForm();
  const { watch } = combined;

  const onSubmit = (data) => {
    const completeEmail = `${data.email}@${data.domain}`;

    const formData = {
      id: data.id,
      email: completeEmail,
    };
    dispatch(setFormData("findpassword", formData));
    console.log(formData);
  };

  return (
    <FormProvider {...combined}>
      {isDesktop ? (
        <DesktopFindPassword
          formFields={findPasswordFormFields}
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch}
        />
      ) : (
        <MobileFindPassword
          formFields={findPasswordFormFields}
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch}
        />
      )}
    </FormProvider>
  );
};

export default FindPasswordPage;
