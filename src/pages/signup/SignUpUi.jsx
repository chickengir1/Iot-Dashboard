import { Box } from "@mui/material";
import FooterLinks from "@components/footerlinks/FooterLinksContainer";
import { layoutConfig } from "@styles/layoutConfig";
import { generateFields } from "@utils/generateFields";
import { Image } from "@styles/index";

const SignUpForm = ({
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
      <Box>
        <Image src={`/logo/smartfarm_banner_200.png`} alt="스마트팜 배너" />
      </Box>
      {generateFields({ formFields, onSubmit, register, errors, watch })}
      <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
    </MainLayout>
  </Layout>
);

const SignUpUi = ({ isDesktop, formFields, onSubmit, combined }) => {
  const { Layout, MainLayout } = layoutConfig(isDesktop);

  return (
    <SignUpForm
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

export default SignUpUi;
