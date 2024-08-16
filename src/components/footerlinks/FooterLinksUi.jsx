import { Box, Typography } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

const styles = {
  footerLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pointer: {
    cursor: "pointer",
  },
};

const FooterLinksUi = ({ text1, onLink1Click, text2, onLink2Click }) => {
  return (
    <Box sx={styles.footerLayout}>
      <Typography onClick={onLink1Click} style={styles.pointer}>
        {text1}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
        <Typography onClick={onLink2Click} style={styles.pointer}>
          {text2}
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterLinksUi;
