import { Box, Typography, Card, CardContent } from "@mui/material";
import LoadingSpinner from "@utils/Loading";

export const CardNews = ({ mscmnc, title, site, newsdate }) => {
  return (
    <Card sx={{ mb: 2 }}>
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
    <Box sx={{ height: "90vh", overflowY: "scroll" }}>
      <Typography variant="subtitle1" gutterBottom>
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
