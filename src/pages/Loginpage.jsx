import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Checkbox,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { formControl } from "../redux/actions/formAction";
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

// 여기서부터가 로그인 페이지 메인 로직이고 위에 적힌 컴포넌트들은 사실상 따로 관리해야 할듯해요 지호님
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
    <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
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
      <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
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
  const formData = useSelector((state) => state.login);
  console.log(JSON.stringify(formData)); // 나중에 서버 api 통신할때 필요함 절대 지우지마시오

  /* 엑시오스 포스트 요청 보내는 훅 완성되면  에러 잡히면 쓰로우 에러 던져서
  에러 바운더리에 넘겨주고
  로딩은 컴포넌트 만들어서 공용으로 사용하고
  폼 데이터는 엑시오스 커스텀 훅에 보내는걸로 합시다*/

  // 추가로 ui 잡을때 썼던 인풋 컴포넌트는 이제 필요없고 텍스트필드로 대체 가능해요 유틸 폴더에 폼필드 관련된 로직 작성해놨는데
  //보고 참고해서 응용해서 사용하시면 됩니다
  // 추가로 폼 유틸과 폼 필드 둘 다 가져와서 사용하는 페이지에 맞는 방법대로 정의하고 작성하면 될듯 해요

  const isDesktop = useMediaQuery("(min-width:600px)");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(formControl("id", data.id));
    dispatch(formControl("password", data.password));
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
