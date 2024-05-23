import React from 'react';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import Cloud from './Background/cloud-svgrepo-com.svg';
 
const numberOfClouds = 10;
 
function App() {
  const clouds = Array.from({ length: numberOfClouds }, (_, index) => {
    const topPosition = Math.random() * 100;
    const animationDuration = 20 + Math.random() * 30;
    const animationDelay = Math.random() * 20;
 
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
<div className="background-with-clouds">
        {clouds}
</div>
<div className="content">
<Search />
<CurrentWeather />
</div>
</div>
  );
}
 
export default App;