// import React, {useContext } from 'react';
// import { CountryContext } from '../context';
// import './Countries.scss';

// const Countries = () => {
//     const countries = useContext(CountryContext);

//   return (
//     <div className="countries-container">
//       <div className="country-cards">
//         {countries.map(country => (
//           <div key={country.cca3} className="country-card">
//             <img src={country.flags.png} alt={country.name.common} />
//             <h2>{country.name.common}</h2>
//             <p>Capital: {country.capital}</p>
//             <p>Region: {country.region}</p>
//             <p>Subregion: {country.subregion}</p>
//             {/* Render other data as needed */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Countries;





import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CountryContext } from '../context';
import './Countries.scss';

const Countries = () => {
  const countries = useContext(CountryContext);

  return (
    <div className="countries-container">
      <div className="country-cards">
        {countries.map(country => (
          <Link key={country.cca3} to={`/country/${country.cca3}`} className="country-card">
            <img src={country.flags.png} alt={country.name.common} />
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital}</p>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion}</p>
            {/* Render other data as needed */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
