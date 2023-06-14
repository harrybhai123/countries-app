import React, { createContext, useState, useEffect } from 'react';
import fetchData from './api/api';

const CountryContext = createContext();

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchData()
      .then(data => setCountries(data))
      .catch(error => console.log('Error setting countries:', error));
  }, []);

  return (
    <CountryContext.Provider value={countries}>
      {children}
    </CountryContext.Provider>
  );
};

export { CountryContext, CountryProvider };
