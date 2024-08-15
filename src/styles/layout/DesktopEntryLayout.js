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
  // 스타일 재정비
  maxHeight: "800px",
  overflow: "scroll",
  backgroundColor: "rgba(255,255,255,0.5)",
  // parentContainer가 없을 시 허용시킬 스타일
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
});
