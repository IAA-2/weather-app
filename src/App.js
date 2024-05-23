import React from 'react';
import Cloud from './Background/cloud-svgrepo-com.svg';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';

const amountClouds = 15;

function App() {
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
        <Search />
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
