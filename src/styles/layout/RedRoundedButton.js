import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const RedRoundedButton = styled(Button)({
  backgroundColor: "#FF8A8A",
  color: "#fff",
  border: "2px solid #fff",
  borderRadius: "10px",
  padding: "10px 16px",
  "&:hover": {
    backgroundColor: "#FF6F6F",
  },
});
