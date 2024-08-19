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
  BlueRoundedButton,
} from "../styles/index";
import { findPasswordFormFields } from "../utils/formFields";
import { utilsFormField } from "../utils/formUtils";
import EmailSelectorContainer from "../components/emailSelector/EmailSelectorContainer";

const styles = {
  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

const FindPasswordForm = ({ onSubmit, register, errors, watch }) => (
  <Box component="form" onSubmit={onSubmit}>
    <EmailSelectorContainer />
    {findPasswordFormFields.map((field) =>
      utilsFormField(field, register, errors, watch)
    )}
    <BlueRoundedButton
      type="submit"
      variant="contained"
      fullWidth
      sx={{ marginTop: "12px" }}
    >
      비밀번호 찾기
    </BlueRoundedButton>
  </Box>
);

export const MobileFindPassword = ({ onSubmit, register, errors, watch }) => (
  <MobileEntryLayout>
    <Box sx={styles.imageLayout}>
      <img alt="이미지" />
    </Box>
    <FindPasswordForm
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      watch={watch}
    />
    <FooterLinks
      text1={"아이디/비밀번호 찾기"}
      link1={"/find-account"}
      text2={"가입하러 가기"}
      link2={"/register"}
    />
  </MobileEntryLayout>
);

export const DesktopFindPassword = ({ onSubmit, register, errors, watch }) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <FindPasswordForm
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        watch={watch}
      />
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
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch}
        />
      ) : (
        <MobileFindPassword
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
