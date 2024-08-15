import { Box, Typography } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const styles = {
  footerLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const FooterLinksUi = ({ text1, link1, text2, link2 }) => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.footerLayout}>
      <Typography onClick={() => navigate(link1)}>{text1}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
        <Typography onClick={() => navigate(link2)}>{text2}</Typography>
      </Box>
    </Box>
  );
};

export default FooterLinksUi;
