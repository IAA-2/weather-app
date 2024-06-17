import React, { useEffect, useState } from 'react';
import {
  GEO_API_URL,
  geoApiOptions,
  WEATHER_API_KEY,
  WEATHER_API_URL,
} from './api';
import Cloud from './Background/cloud-svgrepo-com.svg';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import Forecast from './components/weather-forecast/forecast';

const amountClouds = 15;

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchRandomCityWeatherUI = async () => {
      try {
        const response = await fetch(
          `${GEO_API_URL}/cities?minPopulation=100000`,
          geoApiOptions
        );
        const data = await response.json();
        const cities = data.data;

        if (cities.length > 0) {
          const randomCity = cities[Math.floor(Math.random() * cities.length)];
          const searchData = {
            label: `${randomCity.name}, ${randomCity.countryCode}`,
            value: `${randomCity.latitude} ${randomCity.longitude}`,
          };
          handleOnSearchChange(searchData);
        }
      } catch (error) {
        console.error('Error fetching random city:', error);
      }
    };

    fetchRandomCityWeatherUI();
  }, []);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  const clouds = Array.from({ length: amountClouds }, (_, index) => {
    const topPosition = Math.random() * 85;
    const animationDuration = 20 + Math.random() * 30;
    const animationDelay = Math.random() * 10;

    return (
      <img
        key={index}
        src={Cloud}
        alt="Cloud"
        className="cloud"
        style={{
          top: `${topPosition}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
        }}
      />
    );
  });

  return (
    <div className="container">
      <div className="background-with-clouds">{clouds}</div>
      <div className="content">
        <Search onSearchChange={handleOnSearchChange} />
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {forecast && <Forecast data={forecast} />}
      </div>
    </div>
  );
}

export default App;
