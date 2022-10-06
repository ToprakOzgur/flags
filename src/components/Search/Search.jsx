import React, { useState, useContext } from "react";
import { CountriesContext } from "../../context/countries/countriesContext";

const Search = () => {
  const { allCountries: all, displayingCountries, setDisplayingCountries } = useContext(CountriesContext);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInput(e) {
    const value = e.target.value;

    if (!value) return;
    const searched_Countries = all.filter((country) => country.name.common.toLowerCase().includes(value));
    setDisplayingCountries(searched_Countries);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
      </form>
    </div>
  );
};

export default Search;
