import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CountriesContext } from "../../context/countries/countriesContext.js";
import { getRandomCountries } from "../../helpers/getRandomCountries.js";
import { CountryCard, Search } from "../../components";

import "./home.scss";

const START_COUNT = 8;

const Home = () => {
  const { allCountries: all, displayingCountries, setDisplayingCountries } = useContext(CountriesContext);

  useEffect(() => {
    if (all.length > 0) {
      const start_with_random_countries = getRandomCountries(all, START_COUNT);
      setDisplayingCountries(start_with_random_countries);
    } else {
      console.log(all);
    }
  }, [all, setDisplayingCountries]);

  return (
    <>
      <main>
        <Search />

        <section className="cards">
          {displayingCountries.length > 0 ? displayingCountries.map((country) => <CountryCard key={country.ccn3} country={country} />) : <h3>Not Found...</h3>}
        </section>
      </main>
    </>
  );
};

export default Home;
