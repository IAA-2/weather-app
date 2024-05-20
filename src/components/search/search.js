import { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_API_URL, geoApiOptions } from '../../api';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
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
    onSearchChange(searchData);
  };

  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderColor: state.isFocused ? 'blue-500' : 'gray-300',
      backgroundColor: state.isFocused ? 'blue-100' : 'white',
      '&:hover': {
        borderColor: 'blue-500',
        backgroundColor: 'blue-400',
      },
      boxShadow: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      '@media (max-width: 768px)': {
        fontSize: '14px',
      },
      '@media (max-width: 480px)': {
        fontSize: '12px',
        padding: '8px',
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
        ? 'blue-100'
        : 'white',
      color: state.isSelected ? 'blue' : 'black',
      '&:hover': {
        backgroundColor: 'blue-100',
        color: 'blue',
        cursor: 'pointer',
      },
      transition: 'background-color 0.2s, color 0.2s',
    }),
  };

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      className="text-sm"
      styles={customStyles}
    />
  );
};

export default Search;
