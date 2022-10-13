import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCountry } from "../../helpers/getCountry";
import { CountriesContext } from "../../context/countries/countriesContext";
import { FaLongArrowAltLeft } from "react-icons/fa";

import "./Details.scss";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { allCountries } = useContext(CountriesContext);

  function getBorderCountries(bordersArray) {
    const borderCountry = bordersArray?.map((code) => getCountry(allCountries, code));
    //return borderCountry?.map((country) => country?.name?.common).join(", ");
    return borderCountry?.map((country) => (
      <button key={country.cca3} onClick={() => handleClick(country)}>
        {country?.name?.common}
      </button>
    ));
  }

  const handleClick = (country) => {
    navigate(`/details/:${country.name.common.toLocaleLowerCase()}`, { state: country });
  };

  return (
    <main className="details">
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        <FaLongArrowAltLeft />
        Back
      </button>
      <section>
        <figure>
          <img src={location.state.flags.png} alt={`${location.state.name.common} flag`} />
        </figure>
        <article>
          <h2>{location.state.name.common}</h2>

          <div className="details__info">
            <div>
              <div>
                Native Name: <span>{location.state.altSpellings[1]}</span>
              </div>
              <div>
                Population: <span>{location.state.population}</span>
              </div>
              <div>
                Region: <span>{location.state.region}</span>
              </div>
              <div>
                Sub Region: <span>{location.state.subregion}</span>
              </div>
              <div>
                Capital: <span>{location.state.capital}</span>
              </div>
            </div>
            <div>
              <div>
                Top Level Domain: <span>{location.state.tld}</span>
              </div>
              <div>
                Currencies: <span>{location.state.currencies[Object.keys(location.state.currencies)].name}</span>
              </div>
              <div>
                Languages: <span>{Object.values(location.state.languages).join(", ")}</span>
              </div>
            </div>
          </div>
          <div className="borders">
            <p>Border Countries: </p>
            {getBorderCountries(location.state.borders)}
          </div>
        </article>
      </section>
    </main>
  );
};

export default Details;
