import { getDescription } from "./weatherDescKo";

export const extractWeatherData = (weatherData) => {
  const currentTemp = weatherData.main.temp;

  const minTemp = weatherData.main.temp_min;
  const maxTemp = weatherData.main.temp_max;

  const weatherDesc = getDescription(weatherData.weather[0].id);
  const weatherIconCode = weatherData.weather[0].icon;
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  const country = weatherData.sys.country;
  const locationName = weatherData.name;

  return {
    currentTemp,
    minTemp,
    maxTemp,
    weatherDesc,
    weatherIcon,
    country,
    locationName,
  };
};
