import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCountry } from "../../helpers/getCountry";
import { CountriesContext } from "../../context/countries/countriesContext";
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
    <main>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>

      <figure>
        <img src={location.state.flags.png} alt={`${location.state.name.common} flag`} />
      </figure>
      <section>
        <h2>{location.state.name.common}</h2>
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
        <div>
          Top Level Domain: <span>{location.state.tld}</span>
        </div>
        <div>
          Currencies: <span>{location.state.currencies[Object.keys(location.state.currencies)].name}</span>
        </div>
        <div>
          Languages: <span>{Object.values(location.state.languages).join(", ")}</span>
        </div>

        <div>
          Border Countries: <span>{getBorderCountries(location.state.borders)}</span>
        </div>
      </section>

      <Link style={{ display: "block", margin: "1rem 0", color: "black" }} to="/">
        Home
      </Link>
    </main>
  );
};

export default Details;
