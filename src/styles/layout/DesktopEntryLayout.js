import { Box, styled } from "@mui/material";

export const DesktopEntryLayout = styled(Box)({
  width: "600px",
  margin: "0 auto",
  border: "solid 1px #ddd",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 16,
  padding: 16,
  boxSizing: "border-box",
  maxHeight: "800px",
  justifyContent: "center",
  backgroundColor: "rgba(255,255,255,0.5)",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});
