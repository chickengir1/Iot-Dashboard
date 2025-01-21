import { Box, Typography, Card, CardContent } from "@mui/material";
import { formatDate } from "@utils/dateUtils";
import LoadingSpinner from "@utils/Loading";

const styles = {
  container: {
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    borderRadius: 1,
    padding: 2,
    height: "85vh",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    scrollbarWidth: "none",
  },
  card: {
    mb: 2,
  },
  title: {
    gutterBottom: true,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
  },
  newsInfo: {
    display: "flex",
    flexDirection: "column",
  },
  newsDate: {
    marginLeft: "auto",
  },
};

export const CardNews = ({ mscmnc, title, site, newsdate }) => {
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Box sx={styles.newsInfo}>
          <Typography variant="body1">{mscmnc}</Typography>
          <Typography variant="body2">
            <a href={site}>{title}</a>
          </Typography>
        </Box>
        <Typography variant="caption" sx={styles.newsDate}>
          {formatDate(newsdate.toString())}
        </Typography>
      </CardContent>
    </Card>
  );
};

const NewsletterUi = ({ news }) => {
  if (!Array.isArray(news)) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={styles.container}>
      {news.map((item) => (
        <CardNews
          key={item.site}
          mscmnc={item.mscmnc}
          title={item.tit}
          site={item.site}
          newsdate={item.newsdate}
        />
      ))}
    </Box>
  );
};

export default NewsletterUi;
