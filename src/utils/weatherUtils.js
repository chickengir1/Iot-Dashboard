import { getDescription } from "./weatherDescKo";

export const extractWeatherData = (weatherData) => {
  const currentTemp = weatherData.main.temp;

  const minTemp = weatherData.main.temp_min;
  const maxTemp = weatherData.main.temp_max;

  const weatherId = getDescription(weatherData.weather[0].id);

  const country = weatherData.sys.country;
  const locationName = weatherData.name;
  return {
    currentTemp,
    minTemp,
    maxTemp,
    weatherId,
    country,
    locationName,
  };
};
