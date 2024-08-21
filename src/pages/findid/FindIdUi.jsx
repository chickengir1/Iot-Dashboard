import React from "react";
import { Box } from "@mui/material";
import { BlueRoundedButton } from "../../styles/index";
import { layoutConfig } from "../../styles/layoutConfig";
import EmailSelectorContainer from "../../components/emailSelector/EmailSelectorContainer";
import FooterLinks from "../../components/footerlinks/FooterLinksContainer";

const FindIdForm = ({ Layout, MainLayout, onSubmit }) => (
  <Layout>
    <MainLayout>
      <Box component="form" onSubmit={onSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          <Box sx={{ border: "solid 1px #ddd", minHeight: "150px" }}>
            <img alt="이미지" />
          </Box>
          <Box sx={{ border: "solid 1px #ddd", minHeight: "150px" }}>
            <img alt="이미지" />
          </Box>
          <EmailSelectorContainer />
          <BlueRoundedButton
            type="submit"
            variant="contained"
            fullWidth
            sx={{ marginTop: "12px" }}
          >
            아이디 찾기
          </BlueRoundedButton>
          <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
        </Box>
      </Box>
    </MainLayout>
  </Layout>
);

const FindIdUi = ({ isDesktop, formFields, onSubmit, combined }) => {
  const { Layout, MainLayout } = layoutConfig(isDesktop);

  return (
    <FindIdForm
      Layout={Layout}
      MainLayout={MainLayout}
      formFields={formFields}
      onSubmit={onSubmit}
      register={combined.register}
      errors={combined.formState.errors}
      watch={combined.watch}
    />
  );
};

export default FindIdUi;
