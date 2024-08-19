import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Checkbox,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/actions/formAction";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import { loginFormFields } from "../utils/formFields";
import { utilsFormField } from "../utils/formUtils";

const styles = {
  brandButtonStyle: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 3,
    padding: "10px 16px",
    "&:hover": {
      backgroundColor: "#F8FAFB",
    },
  },
};

// 이것도 나중에 서버에 상태 저장해야함
const SaveLogin = () => (
  <Box sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
    <Checkbox sx={{ padding: 0 }} />
    <Typography>로그인 정보 기억하기</Typography>
  </Box>
);

// 나중에 유틸로 따로 뺍시다 지호님
const ButtonComponent = ({ style }) => (
  <Box sx={style}>
    <Button
      startIcon={
        <img
          src={`/icons/google-logo.svg`}
          alt="Google Logo"
          style={{ width: 24, height: 24 }}
        />
      }
      variant="contained"
      fullWidth
      sx={styles.brandButtonStyle}
    >
      Google
    </Button>
    <Button
      startIcon={
        <img
          src={`/icons/apple-logo.svg`}
          alt="Apple Logo"
          style={{ width: 24, height: 24 }}
        />
      }
      variant="contained"
      fullWidth
      sx={styles.brandButtonStyle}
    >
      Apple
    </Button>
  </Box>
);

const LoginForm = ({ onSubmit, register, errors }) => (
  <Box component="form" onSubmit={onSubmit}>
    {loginFormFields.map((field) => utilsFormField(field, register, errors))}
    <SaveLogin />
    <BlueRoundedButton
      type="submit"
      variant="contained"
      fullWidth
      sx={{ marginTop: "12px" }}
    >
      LOGIN
    </BlueRoundedButton>
  </Box>
);

const MobileLogin = ({ onSubmit, register, errors }) => (
  <MobileEntryLayout>
    <Box sx={{ border: "solid 1px #ddd", minHeight: "250px" }}>
      <img alt="이미지" />
    </Box>
    <LoginForm onSubmit={onSubmit} register={register} errors={errors} />
    <Typography align="center" sx={{ marginY: "12px" }}>
      다른 방법으로 로그인
    </Typography>
    <ButtonComponent style={{ display: "flex", gap: "12px" }} />
    <FooterLinks
      text1={"아이디/비밀번호 찾기"}
      link1={"/find-account"}
      text2={"가입하러 가기"}
      link2={"/register"}
    />
  </MobileEntryLayout>
);

const DesktopLogin = ({ onSubmit, register, errors }) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={{ border: "solid 1px #ddd", minHeight: "250px" }}>
        <img alt="이미지" />
      </Box>
      <LoginForm onSubmit={onSubmit} register={register} errors={errors} />
      <Typography align="center" sx={{ marginY: "12px" }}>
        다른 방법으로 로그인
      </Typography>
      <ButtonComponent style={{ display: "flex", gap: "12px" }} />
      <FooterLinks
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const LoginPage = () => {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = {
      id: data.id,
      password: data.password,
    };

    dispatch(setFormData("login", formData));
    console.log(formData);
  };

  return isDesktop ? (
    <DesktopLogin
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  ) : (
    <MobileLogin
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      errors={errors}
    />
  );
};

export default LoginPage;
