import { useEffect, useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';
import CloseIcon from '../Search Component Svg/close-svgrepo-com.svg';
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(history);
  }, []);

  const saveToHistory = (searchData) => {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history = [
      searchData,
      ...history.filter((item) => item.value !== searchData.value),
    ];
    if (history.length > 3) {
      history.pop();
    }
    localStorage.setItem('searchHistory', JSON.stringify(history));
    setSearchHistory(history);
  };

  const removeFromHistory = (searchData) => {
    let history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    history = history.filter((item) => item.value !== searchData.value);
    localStorage.setItem('searchHistory', JSON.stringify(history));
    setSearchHistory(history);
  };

  const loadOptions = async (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          })),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    saveToHistory(searchData);
    onSearchChange(searchData);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? 'blue-500' : 'gray-300',
      backgroundColor: state.isFocused ? 'white' : 'white',
      '&:hover': {
        borderColor: 'blue-500',
      },
      boxShadow: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      padding: '0.25rem 0.5rem',
      fontSize: '0.875rem',
      '@media (max-width: 768px)': {
        fontSize: '12px',
      },
      '@media (max-width: 480px)': {
        fontSize: '10px',
        padding: '4px',
      },
    }),
    menu: (base) => ({
      ...base,
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: '60vh',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? 'blue-500'
        : state.isFocused
        ? '#f0f8ff'
        : 'white',
      color: state.isSelected ? 'white' : 'black',
      '&:hover': {
        backgroundColor: '#f0f8ff',
        color: 'blue',
        cursor: 'pointer',
      },
      transition: 'background-color 0.2s, color 0.2s',
    }),
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Wählen Sie eine Stadt"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="text-sm"
        styles={customStyles}
      />
      {searchHistory.length > 0 && (
        <div className="mt-2 bg-white p-1 rounded-lg shadow-md">
          <label className="text-xs font-semibold">Letzte Suchanfragen:</label>
          <ul className="list-none">
            {searchHistory.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center cursor-pointer hover:bg-blue-100 p-1 rounded-lg text-sm"
              >
                <span onClick={() => handleOnChange(item)}>{item.label}</span>
                <button
                  className="ml-2"
                  onClick={() => removeFromHistory(item)}
                >
                  <img src={CloseIcon} alt="Remove" className="w-4 h-4" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
