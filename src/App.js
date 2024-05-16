import React from 'react';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';
import Cloud1 from './Background/cloud-svgrepo-com (2).svg'; // Importiere deine SVG-Dateien hier
import Cloud2 from './Background/cloud-svgrepo-com (2).svg';
import Cloud3 from './Background/cloud-svgrepo-com (2).svg';
import Cloud4 from './Background/cloud-svgrepo-com (2).svg';

function App() {
  return (
    <div className="container">
      <div className="background-with-clouds">
        <img src={Cloud1} alt="Cloud" className="clouds" />
        <img src={Cloud2} alt="Cloud" className="clouds" />
        <img src={Cloud3} alt="Cloud" className="clouds" />
        <img src={Cloud4} alt="Cloud" className="clouds" />
      </div>
      <div className="content">
        <Search />
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
