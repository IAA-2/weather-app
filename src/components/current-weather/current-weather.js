import React from 'react';

const CurrentWeather = () => {
  return (
    <div className="max-w-sm w-full bg-[#333] text-white rounded-lg shadow-xl p-6 my-5 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-xl font-semibold">Belgrade</p>
          <p className="text-sm">Sunny</p>
        </div>
        <img alt="weather" className="w-20" src="icons/01d.png" />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-7xl">18°C</p>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase mr-2">Details</span>
            <span className="text-xs">Feels like 22°C</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-medium uppercase mr-2">Wind</span>
            <span className="text-xs">2 m/s</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-medium uppercase mr-2">Humidity</span>
            <span className="text-xs">15%</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-medium uppercase mr-2">Pressure</span>
            <span className="text-xs">15 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
