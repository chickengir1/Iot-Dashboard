import React from "react";
import { Box } from "@mui/material";
import { BlueRoundedButton, Image } from "@styles/index";
import { layoutConfig } from "@styles/layoutConfig";
import EmailSelectorContainer from "@components/emailSelector/EmailSelectorContainer";
import FooterLinks from "@components/footerlinks/FooterLinksContainer";

const FindIdForm = ({ Layout, MainLayout, onSubmit, BackGround }) => (
  <Box component="form" onSubmit={onSubmit}>
    <BackGround />
    <Layout>
      <MainLayout>
        <Box>
          <Image src={`logo/smartfarm_banner.png`} alt="스마트팜 배너" />
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
      </MainLayout>
    </Layout>
  </Box>
);

const FindIdUi = ({ isDesktop, formFields, onSubmit, combined }) => {
  const { Layout, MainLayout, BackGround } = layoutConfig(isDesktop);

  return (
    <FindIdForm
      Layout={Layout}
      MainLayout={MainLayout}
      BackGround={BackGround}
      formFields={formFields}
      onSubmit={onSubmit}
      register={combined.register}
      errors={combined.formState.errors}
      watch={combined.watch}
    />
  );
};

export default FindIdUi;
