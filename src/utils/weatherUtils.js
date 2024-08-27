import { getDescription } from "./weatherDescKo";

export const extractWeatherData = (weatherData) => {
  const currentTemp = weatherData.main.temp;

  const weatherDesc = getDescription(weatherData.weather[0].id);
  const weatherIconCode = weatherData.weather[0].icon;
  const weatherIcon = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

  const country = weatherData.sys.country;
  const locationName = weatherData.name;

  return {
    currentTemp,
    weatherDesc,
    weatherIcon,
    country,
    locationName,
  };
};
