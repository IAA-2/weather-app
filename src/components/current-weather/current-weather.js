import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div className="max-w-sm w-full md:max-w-xl bg-[#ffffff] text-black rounded-lg shadow-2xl p-4 sm:p-8 my-8 mx-auto relative overflow-hidden">
      <div className="flex justify-between items-center mb-4 sm:mb-8">
        <div>
          <p className="text-xl sm:text-3xl font-semibold">{data.city}</p>
          <p className="text-base sm:text-lg">{data.weather[0].description}</p>
        </div>
        <img
          alt="weather"
          className="w-20 h-20 sm:w-28 sm:h-28"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <p className="text-6xl sm:text-9xl">{Math.round(data.main.temp)}°C</p>
        <div className="flex flex-col">
          <div className="text-sm sm:text-lg font-bold uppercase my-4 sm:my-2">
            Details
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col items-start">
              <span className="text-xs sm:text-sm font-semibold uppercase">
                Feels Like
              </span>
              <span>{Math.round(data.main.feels_like)}°C</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs sm:text-sm font-semibold uppercase">
                Wind
              </span>
              <span>{data.wind.speed} m/s</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs sm:text-sm font-semibold uppercase">
                Humidity
              </span>
              <span>{data.main.humidity}%</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-xs sm:text-sm font-semibold uppercase">
                Pressure
              </span>
              <span>{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
