import { Box, Button } from "@mui/material";

const oauthButtonStyle = {
  backgroundColor: "#fff",
  color: "#000",
  borderRadius: 3,
  padding: "10px 16px",
  "&:hover": {
    backgroundColor: "#F8FAFB",
  },
};

const handleOAuthLogin = (provider) => {
  const url = `/api/auth/${provider.toLowerCase()}/redirect`;
  window.open(url, "_self");
};

export const OAuthButton = ({ imgSrc, altText, provider }) => (
  <Button
    startIcon={
      <img src={imgSrc} alt={altText} style={{ width: 24, height: 24 }} />
    }
    variant="contained"
    fullWidth
    sx={oauthButtonStyle}
    onClick={() => handleOAuthLogin(provider)}
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
      imgSrc="/icons/discord-logo.svg"
      altText="Discord Logo"
      provider="Discord"
    />
  </Box>
);
