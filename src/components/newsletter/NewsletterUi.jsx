import { Box, Typography, Card, CardContent } from "@mui/material";
import LoadingSpinner from "@utils/Loading";

const styles = {
  container: {
    height: "90vh",
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
};

export const CardNews = ({ mscmnc, title, site, newsdate }) => {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Box>
          <Typography variant="body1">{mscmnc}</Typography>
          <Typography variant="body2">
            <a href={site}>{title}</a>
          </Typography>
        </Box>
        <Typography variant="caption">{newsdate}</Typography>
      </CardContent>
    </Card>
  );
};

const NewsletterUi = ({ newsData }) => {
  if (!Array.isArray(newsData)) {
    return <LoadingSpinner />;
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle1" sx={styles.title}>
        실시간 뉴스 정보
      </Typography>
      {newsData.map((news) => (
        <CardNews
          key={news.tit}
          mscmnc={news.mscmnc}
          title={news.tit}
          site={news.site}
          newsdate={news.newsdate}
        />
      ))}
    </Box>
  );
};

export default NewsletterUi;
