import React from "react";
import { Box } from "@mui/material";
import FooterLinks from "../../components/footerlinks/FooterLinksContainer";
import { generateFields } from "../../utils/generateFields";
import { layoutConfig } from "../../styles/layoutConfig";

const styles = {
  imageLayout: { border: "solid 1px #ddd", minHeight: "150px" },
};

export const FindPwForm = ({
  Layout,
  MainLayout,
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => (
  <Layout>
    <MainLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
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
    </MainLayout>
  </Layout>
);

const FindPwUi = ({ isDesktop, formFields, onSubmit, combined }) => {
  const { Layout, MainLayout } = layoutConfig(isDesktop);

  return (
    <FindPwForm
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

export default FindPwUi;
