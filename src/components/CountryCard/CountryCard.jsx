import React from "react";
import { useNavigate } from "react-router-dom";

import "./CountryCard.scss";

const CountryCard = ({ country }) => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/:${country.name.common.toLocaleLowerCase()}`, { state: country });
  };

  return (
    <article className="card" onClick={handleClick}>
      <div className="flag">
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
      </div>
      <h4>{country.name.common}</h4>
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
