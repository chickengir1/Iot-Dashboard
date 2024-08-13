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

const datas = [
  {
    image: ".",
    title: "Lizard",
    content: `Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica efewfwef efwe fwe fwef wef weffwe fw efw efw `,
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

const BigNewsCard = ({ image, title, content }) => {
  // 카드 작명 구림. 카드 내부 배치 비율 조절
  const bigCardStyle = {
    display: "flex",
    alignItems: "center",
    padding: 1,
    borderRadius: 2,
    boxShadow: 1,
    maxWidth: 345,
    minWidth: 345,
  };

  const titleStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 30,
  };

  const contentStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    height: 60,
  };

  return (
    <Card sx={bigCardStyle}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: 140,
            border: "solid 1px #d9d9d9",
            objectFit: "cover",
          }}
          image={image}
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={contentStyle}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const SmallNewsCard = ({ image, title, content }) => {
  // 카드 작명 구림. 카드 내부 배치 비율 조절
  const smallCardStyle = {
    display: "flex",
    flexDirection: "row",
    padding: 1,
    borderRadius: 2,
    boxShadow: 1,
    width: "100%",
  };

  const titleStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 30,
  };

  const contentStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    height: 80,
  };

  return (
    <Card sx={smallCardStyle}>
      <CardActionArea sx={{ display: "flex", alignItems: "center" }}>
        <CardMedia
          component="img"
          sx={{
            width: 140,
            height: 140,
            border: "solid 1px #d9d9d9",
            objectFit: "cover",
            borderRadius: 2,
          }}
          image={image}
          alt="green iguana"
        />

        <CardContent
          sx={{
            flex: 1,
          }}
        >
          <Typography gutterBottom variant="h5" component="div" sx={titleStyle}>
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={contentStyle}>
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export const MobileNewsList = () => {
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
        {datas.map((item, index) => (
          <BigNewsCard
            key={index}
            image={item.image}
            title={item.title}
            content={item.content}
          />
        ))}
      </Box>
      <Typography align="center" variant="h5">
        데일리 소식
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        {datas.map((item, index) => (
          <SmallNewsCard
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

export const DesktopNewsList = () => {
  return (
    <Box>
      <Sidebar />
    </Box>
  );
};
const NewsListPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopNewsList /> : <MobileNewsList />;
};

export default NewsListPage;
