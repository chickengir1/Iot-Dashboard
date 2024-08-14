import React from "react";
import { useMediaQuery, Box, Typography, Grid } from "@mui/material";
import { DesktopLayout, ServeContent, MobileLayout } from "../styles/index";
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

// 페이지 고유 스타일
const styles = {
  newsCard: {
    padding: 1,
    borderRadius: 2,
    boxShadow: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
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
  },

  // 고유 레이아웃
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

const NewsSection = ({ title, layoutStyle, items }) => (
  <>
    <Typography align="center" variant="h5">
      {title}
    </Typography>
    <Box sx={layoutStyle}>
      {items.map((item, index) => (
        <NewsCard key={index} image={item.image} title={item.title} />
      ))}
    </Box>
  </>
);

const MobileNewsList = () => (
  <MobileLayout>
    <Sidebar />
    <NewsSection
      title="핫 토픽!"
      layoutStyle={styles.carouselLayout}
      items={datas}
    />
    <NewsSection
      title="데일리 소식"
      layoutStyle={styles.columnLayout}
      items={datas}
    />
  </MobileLayout>
);

const DesktopNewsList = () => (
  <DesktopLayout>
    <Sidebar />
    <Box sx={styles.mainContent}>
      <Grid container spacing={2}>
        {datas.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={index % 3 === 0 ? 12 : 6}>
            <NewsCard image={item.image} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
    <ServeContent />
  </DesktopLayout>
);

const NewsListPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopNewsList /> : <MobileNewsList />;
};

export default NewsListPage;
