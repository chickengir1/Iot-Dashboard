import React from "react";
import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import InputUi from "../components/input/InputUi";
import SelectUi from "../components/selector/SelectUi";

const styles = {
  mobileLayout: {
    padding: 2,
    margin: "0 auto",
    border: "solid 1px #ddd",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  desktopLayout: {
    width: "600px",
    margin: "0 auto",
    border: "solid 1px #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 3,
    padding: 2,
  },
  desktopInnerLayout: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  buttonStyle: {
    backgroundColor: "#64B8FF",
    color: "#fff",
    borderRadius: 3,
    padding: "10px 16px",
    border: "2px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBoxLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export const MobileLayout = () => {
  return (
    <Box sx={styles.mobileLayout}>
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
      <InputUi
        id={"username"}
        label={"이름"}
        placeholder={"홍길동"}
        error={"error"}
      />
      <InputUi
        id={"phoneNumber"}
        label={"전화번호"}
        placeholder={"01012341234"}
        error={"error"}
      />
      <Button variant="contained" sx={styles.buttonStyle}>
        Sign Up
      </Button>
      <Box sx={styles.bottomBoxLayout}>
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
  return (
    <Box sx={styles.desktopLayout}>
      <Box sx={styles.desktopInnerLayout}>
        <Box sx={{ border: "solid 1px #ddd", height: "50px" }}>
          <img alt="로고" />
        </Box>
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
        <InputUi
          id={"username"}
          label={"이름"}
          placeholder={"홍길동"}
          error={"error"}
        />
        <InputUi
          id={"phoneNumber"}
          label={"전화번호"}
          placeholder={"01012341234"}
          error={"error"}
        />
        <Button variant="contained" sx={styles.buttonStyle}>
          Sign Up
        </Button>
        <Box sx={styles.bottomBoxLayout}>
          <Link>가입 안내 문구</Link>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
            <Typography>로그인 하러 가기</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default SignUpPage;
