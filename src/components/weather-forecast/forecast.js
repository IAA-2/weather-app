import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './forecast.css'
const WEEK_DAYS = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
  'Sonntag',
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="text-xl font-bold px-1 py-16">Daily</label>
      <Accordion allowZeroExpanded preExpanded={['0']}>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton className="accordion-button">
                <div className="rounded-lg my-2 flex items-center cursor-pointer text-sm p-2 bg-white">
                  <img
                    alt="weather"
                    className="w-12 h-12"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <div className="flex flex-col flex-grow ml-4">
                    <label className="text-black font-semibold">
                      {forecastDays[idx]}
                    </label>
                    <label className="text-gray-700">
                      {item.weather[0].description}
                    </label>
                  </div>
                  <label className="text-gray-500 text-right">
                    {Math.round(item.main.temp_min)}°C /{' '}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="accordion-panel">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="flex justify-between">
                  <label className="font-semibold">Druck</label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="flex justify-between">
                  <label className="font-semibold">Luftfeuchtigkeit</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="flex justify-between">
                  <label className="font-semibold">Wolken</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="flex justify-between">
                  <label className="font-semibold">Windgeschwindigkeit</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="flex justify-between">
                  <label className="font-semibold">M ü.M.</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="flex justify-between">
                  <label className="font-semibold">Feels like</label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
