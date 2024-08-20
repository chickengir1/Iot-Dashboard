import { Box, Button } from "@mui/material";

// 임시로 추출한 코드입니다
const oauthButtonStyle = {
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: 3,
  padding: "10px 16px",
  "&:hover": {
    backgroundColor: "#F8FAFB",
  },
};

export const OAuthButton = ({ imgSrc, altText, provider }) => (
  <Button
    startIcon={
      <img src={imgSrc} alt={altText} style={{ width: 24, height: 24 }} />
    }
    variant="contained"
    fullWidth
    sx={oauthButtonStyle}
  >
    {provider}
  </Button>
);

export const OAuth = ({ style }) => (
  <Box sx={style}>
    <OAuthButton
      imgSrc="/icons/google-logo.svg"
      altText="Google Logo"
      provider="Google"
    />
    <OAuthButton
      imgSrc="/icons/apple-logo.svg"
      altText="Apple Logo"
      provider="Apple"
    />
  </Box>
);
