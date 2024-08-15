import { Box, Link, Typography } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

const styles = {
  footerLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const FooterLinksUi = ({ text1, href1, text2, href2 }) => (
  <Box sx={styles.footerLayout}>
    <Link href={href1}>{text1}</Link>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
      <Typography>{text2}</Typography>
    </Box>
  </Box>
);

export default FooterLinksUi;
