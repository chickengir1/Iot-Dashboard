import React from "react";
import { useMediaQuery, Box, Typography, Grid } from "@mui/material";
import Sidebar from "../components/sidebar/sidebarcontainer";

const datas = [
  {
    image: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lizard",
  },
  {
    image: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
  },
  {
    image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
  },
  {
    image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
  },
  {
    image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
  },
];

const styles = {
  newsCard: {
    padding: 1,
    borderRadius: 2,
    boxShadow: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
  },
  layout: {
    padding: 2,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "80px",
    gap: 2,
    overflow: "auto",
    height: "auto",
  },
  carouselLayout: {
    display: "flex",
    gap: 3,
    padding: 2,
    overflowX: "auto",
    whiteSpace: "nowrap",
  },
  columnLayout: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
    padding: 2,
    alignItems: "center",
    overflowY: "auto",
  },
  desktopLayout: {
    padding: 2,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  mainContent: {
    flexGrow: 1,
    padding: 2,
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginLeft: 2,
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: 2,
    gap: 2,
    overflowY: "auto",
  },
  serveContent: {
    minWidth: "220px",
    maxWidth: "220px",
    marginLeft: 2,
    border: "1px solid #ddd",
    padding: 2,
    borderRadius: 2,
  },
};

const NewsCard = ({ image, title }) => (
  <Box sx={styles.newsCard}>
    <img
      src={image}
      alt={title}
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "220px",
        borderRadius: 2,
      }}
    />
    <Typography variant="h6" component="div">
      {title}
    </Typography>
  </Box>
);

// 이 컴포넌트는 없어도 됨
const NewsList = ({ layoutStyle, children }) => (
  <Box sx={layoutStyle}>
    <Sidebar />
    {children}
  </Box>
);

const MobileNewsList = () => (
  <NewsList layoutStyle={styles.layout}>
    <Typography align="center" variant="h5">
      핫 토픽!
    </Typography>
    <Box sx={styles.carouselLayout}>
      {datas.map((item, index) => (
        <NewsCard key={index} image={item.image} title={item.title} />
      ))}
    </Box>
    <Typography align="center" variant="h5">
      데일리 소식
    </Typography>
    <Box sx={styles.columnLayout}>
      {datas.map((item, index) => (
        <NewsCard key={index} image={item.image} title={item.title} />
      ))}
    </Box>
  </NewsList>
);

const DesktopNewsList = () => (
  <NewsList layoutStyle={styles.desktopLayout}>
    <Box sx={styles.mainContent}>
      <Grid container spacing={2}>
        {datas.map((item, index) => (
          <Grid item key={index} xs={index % 3 === 0 ? 12 : 6}>
            <NewsCard image={item.image} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
    <Box sx={styles.serveContent}>{/* 이미지 아무거나 */}</Box>
  </NewsList>
);

const NewsListPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopNewsList /> : <MobileNewsList />;
};

export default NewsListPage;
