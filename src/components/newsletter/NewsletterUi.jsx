import { Box, Typography, Card, CardContent } from "@mui/material";

export const CardNews = ({ mscmnc, title, site, newsdate }) => {
  return (
    <Card sx={{ mb: 1 }}>
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
    return <Typography variant="body2">로딩 중</Typography>;
  }

  return (
    <Box sx={{ mb: 2 }}>
      {newsData.map((news, idx) => (
        <CardNews
          key={idx}
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
