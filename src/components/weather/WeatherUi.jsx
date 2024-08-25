import { Box, Typography, Card, CardContent } from "@mui/material";

const WeatherUi = ({ weatherData }) => {
  return (
    <Box sx={{ mb: 2, minHeight: "20vh" }}>
      <Card sx={{ mt: 2, minHeight: "20vh" }}>
        <CardContent>
          <Typography variant="subtitle1">날씨 위젯 ui</Typography>
          <Typography>
            {weatherData ? JSON.stringify(weatherData) : "nn"}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherUi;
