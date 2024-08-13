import {
  useMediaQuery,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Sidebar from "../components/sidebar/sidebarcontainer";

const bigNews = [
  {
    image: ".",
    title: "Lizard",
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
  },
  {
    image: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
    title: "Lake view",
    content: "4.74M views",
  },
  {
    image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    content: "3.98M views",
  },
  {
    image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    content: "3.98M views",
  },
  {
    image: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36",
    title: "Mountain view",
    content: "3.98M views",
  },
];

const BigCardNews = ({ image, title, content }) => {
  // 카드 작명 구림. 카드 내부 배치 비율 조절
  const bigcardStyle = {
    display: "flex",
    alignItems: "center",
    padding: 1,
    borderRadius: 2,
    boxShadow: 1,
    maxWidth: 345,
    minWidth: 345,
  };
  return (
    <Card sx={bigcardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          sx={{ border: "solid 1px #d9d9d9" }}
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const MobileDeviceList = () => {
  const styles = {
    mobileLayout: {
      padding: 2,
      margin: "0 auto",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: "80px",
      gap: 1,
    },
    carouseLayout: {
      display: "flex",
      gap: 1,
      py: 1,
      overflow: "auto",
      width: "100%",
      scrollSnapType: "x mandatory",
      "& > *": {
        scrollSnapAlign: "center",
      },
      "::-webkit-scrollbar": { display: "none" },
    },
  };
  return (
    <Box sx={styles.mobileLayout}>
      <Typography align="center" variant="h5">
        핫 토픽!
      </Typography>
      <Box sx={styles.carouseLayout}>
        {bigNews.map((item, index) => (
          <BigCardNews
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </Box>

      <Sidebar />
    </Box>
  );
};

export const DesktopDeviceList = () => {
  return (
    <Box>
      <Sidebar />
    </Box>
  );
};
const NewsListPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopDeviceList /> : <MobileDeviceList />;
};

export default NewsListPage;
