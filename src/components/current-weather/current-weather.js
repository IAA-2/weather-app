import React from 'react';

const CurrentWeather = ({ data }) => {
  return (
    <div className="max-w-sm w-full md:max-w-xl bg-white text-black rounded-lg shadow-2xl p-6 sm:p-8 my-8 mx-auto relative overflow-hidden">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <div>
          <p className="text-2xl sm:text-3xl font-semibold">{data.city}</p>
          <p className="text-lg sm:text-xl capitalize">
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className="w-24 h-24 sm:w-32 sm:h-32"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <p className="text-7xl sm:text-9xl font-bold">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="flex flex-col mt-4 sm:mt-0 sm:ml-6">
          <div className="text-md sm:text-lg font-bold uppercase mb-4 sm:mb-6">
            Details
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col items-start">
              <span className="text-sm sm:text-md font-semibold uppercase">
                Gefühlte Temperatur
              </span>
              <span className="text-lg sm:text-xl">
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm sm:text-md font-semibold uppercase">
                Wind
              </span>
              <span className="text-lg sm:text-xl">{data.wind.speed} m/s</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm sm:text-md font-semibold uppercase">
                Feuchtigkeit
              </span>
              <span className="text-lg sm:text-xl">{data.main.humidity}%</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm sm:text-md font-semibold uppercase">
                Druck
              </span>
              <span className="text-lg sm:text-xl">
                {data.main.pressure} hPa
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
