import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CountryContext } from '../context';
import './CountryDetails.scss';

const CountryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const countries = useContext(CountryContext);
  const country = countries.find((country) => country.cca3 === id);

  if (!country) {
    return <div className="country-details">Country not found</div>;
  }

  const { name, capital, region, subregion, flags, borders, currencies, population } = country;

  const handleGoBack = () => {
    navigate(-1);
  };



  return (
    <div className="country-details">
      <button onClick={handleGoBack} className="back-button">
        Go Back
      </button>
      <div className="country-details-content">
        <h2>{name.common}</h2>
        <img src={flags.png} alt={name.common} />
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Subregion: {subregion}</p>
        <p>Borders: {borders.join(', ')}</p>
        <p>Currencies: {Object.values(currencies).map((currency) => currency.name).join(', ')}</p>
        <p>Population: {population.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
