import React from "react";
import { useNavigate } from "react-router-dom";

const CountryCard = ({ country }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/:${country.name.common.toLocaleLowerCase()}`, { state: country });
  };

  return (
    <article onClick={handleClick}>
      <h2>{country.name.common}</h2>
      <div>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
      </div>
      <ul>
        <li>
          Population: <span>{country.population}</span>
        </li>
        <li>
          Region: <span>{country.region}</span>
        </li>
        <li>
          Capital: <span>{country.capital}</span>
        </li>
      </ul>
    </article>
  );
};

export default CountryCard;
