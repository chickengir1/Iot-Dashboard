import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputBase,
  InputLabel,
  Link,
  MenuItem,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  CheckCircleOutlineOutlined,
  LanguageOutlined,
} from "@mui/icons-material";
import InputUi from "../components/input/InputUi";
import SelectUi from "../components/selector/SelectUi";

export const MobileLayout = () => {
  const mobileLayout = {
    padding: 2,
    margin: "0 auto",
    border: "solid 1px #ddd",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  return (
    <Box sx={mobileLayout}>
      <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
        <img alt="이미지" />
      </Box>
      <InputUi
        id={"id"}
        label={"아이디"}
        placeholder={"elice1234"}
        error={"error"}
      />
      <SelectUi />

      <InputUi
        id={"password"}
        label={"비밀번호"}
        placeholder={"********"}
        error={"error"}
      />
      <InputUi
        id={"password"}
        label={"비밀번호 확인"}
        placeholder={"********"}
        error={"error"}
      />
      <Button variant="contained" fullWidth>
        Sign Up
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link>가입 안내 문구</Link>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
          <Typography>로그인 하러 가기</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const DesktopLayout = () => {
  return <></>;
};

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default SignUpPage;
