import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div className="max-w-sm w-full bg-[#333] text-white rounded-lg shadow-xl p-6 my-5 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-xl font-semibold">{data.city}</p>
          <p className="text-sm">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="w-20"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-7xl">{Math.round(data.main.temp)}°C</p>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase mr-2">Details</span>
            <div className="flex items-center">
              <span className="text-xs font-medium uppercase mr-2">
                Feels Like{' '}
              </span>
              <span className="text-xs">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-medium uppercase mr-2">Wind</span>
            <span className="text-xs">{data.wind.speed} m/s</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-medium uppercase mr-2">Humidity</span>
            <span className="text-xs">{data.main.humidity}%</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-medium uppercase mr-2">Pressure</span>
            <span className="text-xs">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
