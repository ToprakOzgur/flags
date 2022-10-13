import React, { useContext, useEffect, useState } from "react";
import { CountriesContext } from "../../context/countries/countriesContext";

import "./Search.scss";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const { allCountries, setDisplayingCountries } = useContext(CountriesContext);
  const [input, setInput] = useState("");
  const [continent, setContinent] = useState("all");

  useEffect(() => {
    if (continent === "all") {
      const searched_Countries = allCountries.filter((country) => country.name.common.toLowerCase().includes(input.toLowerCase()));
      setDisplayingCountries(searched_Countries);
    } else {
      const searched_Countries = allCountries.filter(
        (country) => country.name.common.toLowerCase().includes(input.toLowerCase()) && country.region.toLowerCase() === continent.toLowerCase()
      );
      setDisplayingCountries(searched_Countries);
    }
  }, [input, allCountries, continent]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function searchRegion(e) {
    setContinent(e.target.value);
  }

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <FaSearch className="search__icon" />
        <input type="text" onChange={handleInput} value={input} placeholder="Search for a country.." />
      </form>
      <div className="search__filter">
        <select onChange={searchRegion}>
          <option defaultValue={"all"} value={"all"}>
            Filter By Region
          </option>
          <option value={"Asia"}>Asia</option>
          <option value={"Africa"}>Africa</option>
          <option value={"Oceania"}>Oceania</option>
          <option value={"Americas"}>America</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Antarctic"}>Antarctic</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
