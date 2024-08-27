import { FmdGood } from "@mui/icons-material";
import { Box, Typography, Card, CardContent, Icon } from "@mui/material";

const WeatherUi = ({ weatherData }) => {
  console.log(weatherData);
  return (
    <Box sx={{ mb: 2, minHeight: "20vh" }}>
      <Card>
        <CardContent>
          {weatherData && (
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>{weatherData.weatherDesc}</Typography>
                <img src={weatherData.weatherIcon} />
              </Box>
              <Icon>
                <FmdGood />
              </Icon>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="location">
                  {weatherData.country},
                </Typography>
                <Typography variant="location">
                  {weatherData.locationName}
                </Typography>
                <Typography>{weatherData.currentTemp}</Typography>
                <Typography>
                  {weatherData.minTemp}/{weatherData.maxTemp}
                </Typography>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherUi;
