import { Box } from "@mui/material";
import FooterLinks from "@components/footerlinks/FooterLinksContainer";
import { generateFields } from "@utils/generateFields";
import { Image } from "@styles/index";
import { layoutConfig } from "@styles/layoutConfig";

export const FindPwForm = ({
  Layout,
  MainLayout,
  BackGround,
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => (
  <>
    <Layout>
      <MainLayout>
        <BackGround />
        <Box>
          <Image src={`logo/smartfarm_banner.png`} alt="스마트팜 배너" />
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
  </>
);

const FindPwUi = ({ isDesktop, formFields, onSubmit, combined }) => {
  const { Layout, MainLayout, BackGround } = layoutConfig(isDesktop);

  return (
    <FindPwForm
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

export default FindPwUi;
