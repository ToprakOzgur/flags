import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../../components/CountryCard/CountryCard.jsx";
import { CountriesContext } from "../../context/countries/countriesContext.js";
import { getRandomCountries } from "../../helpers/getRandomCountries.js";
import Filter from "../../components/Filter/Filter";
import Search from "../../components/Search/Search";

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
        <div className="search">
          <Search />
          <Filter />
        </div>
        <section className="cards">
          {displayingCountries.length > 0 ? displayingCountries.map((country) => <CountryCard key={country.ccn3} country={country} />) : <h3>loading...</h3>}
        </section>
      </main>

      <Link style={{ display: "block", margin: "1rem 0", color: "black" }} to="details">
        Details
      </Link>
    </>
  );
};

export default Home;
