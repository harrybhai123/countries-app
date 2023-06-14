import React, { useContext, useState } from 'react';
import { CountryContext } from '../../context';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const countries = useContext(CountryContext);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <nav className="navbar">
            <h1>Discover the World</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by country name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            {searchTerm && (
                <div className="show">
                    {filteredCountries.map((country) => (
                        <Link to={`/country/${country.cca3}`} key={country.cca3}>
                            <div className='link'>{country.name.common}</div>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
