import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ServeContent = styled(Box)({
  minWidth: "220px",
  maxWidth: "220px",
  marginLeft: 16,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
  border: "3px solid rgba(176, 190, 197, 0.5)",
  padding: 16,
  borderRadius: 8,
  backgroundImage: 'url("/logo/serverbanner.webp")',
  backgroundSize: "cover",
  backgroundPosition: "center",
});
