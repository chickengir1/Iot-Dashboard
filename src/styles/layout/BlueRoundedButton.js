import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const BlueRoundedButton = styled(Button)({
  backgroundColor: "#64B8FF",
  color: "#fff",
  borderRadius: "10px",
  padding: "10px 16px",
  border: "4px solid #fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: "#57A5E6",
  },
});
