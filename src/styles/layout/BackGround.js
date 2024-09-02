import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const kenburnsTop = {
  "@keyframes kenburns-top": {
    "0%": {
      transform: "scale(1) translateY(0)",
      transformOrigin: "50% 16%",
    },
    "100%": {
      transform: "scale(1.25) translateY(-15px)",
      transformOrigin: "top",
    },
  },
};

export const BackGround = styled(Box)({
  backgroundImage: 'url("/logo/background.webp")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: -1,
  animation: "kenburns-top 10s ease-in-out infinite",
  ...kenburnsTop,
});
