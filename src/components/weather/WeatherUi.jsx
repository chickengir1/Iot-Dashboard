import { Box, Typography, Card, CardContent } from "@mui/material";

const WeatherUi = ({ weatherData }) => {
  return (
    <Box sx={{ mb: 2, minHeight: "20vh" }}>
      <Card sx={{ mt: 2, minHeight: "20vh" }}>
        <CardContent>
          {weatherData && (
            <Box>
              <Typography variant="location">
                {weatherData.country},{weatherData.locationName}
              </Typography>
              <img src={weatherData.weatherIcon} />
              <Typography>{weatherData.weatherDesc}</Typography>
              <Typography>{weatherData.currentTemp}</Typography>
              <Typography>
                {weatherData.minTemp}/{weatherData.maxTemp}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherUi;
