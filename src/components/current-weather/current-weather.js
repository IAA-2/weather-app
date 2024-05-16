import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div className="max-w-2xl w-full bg-[#2d2929] text-white rounded-lg shadow-2xl p-8 my-5 mx-auto relative overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-2xl font-semibold">{data.city}</p>
          <p className="text-base">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="w-24 h-24"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-8xl">{Math.round(data.main.temp)}°C</p>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-medium font-extrabold uppercase mr-8 mt-10">
              Details
            </span>
            <div className="flex items-center">
              <span className="text-base font-lg uppercase mr-2">
                Feels Like
              </span>
              <span className="text-sm">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-base font-medium uppercase mr-2">Wind</span>
            <span className="text-sm">{data.wind.speed} m/s</span>
          </div>
          <div className="flex items-center">
            <span className="text-base font-medium uppercase mr-2">
              Humidity
            </span>
            <span className="text-sm">{data.main.humidity}%</span>
          </div>
          <div className="flex items-center">
            <span className="text-base font-medium uppercase mr-2">
              Pressure
            </span>
            <span className="text-sm">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
