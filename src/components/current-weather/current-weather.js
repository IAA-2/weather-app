import './current-weather';

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Belgrade</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img
        alt="weather-design"
        className="weather-icon"
        src="icons/01d.png"
      ></img>
    </div>
  );
};

export default CurrentWeather;
