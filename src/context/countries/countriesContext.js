import { createContext } from "react";
import { useEffect, useState } from "react";
import { getAllCounties } from "../../services/getAllCounties";

export const CountriesContext = createContext();

export const CountriesContextProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [displayingCountries, setDisplayingCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const all = await getAllCounties();
      setAllCountries(all);
    })();
  }, []);

  return <CountriesContext.Provider value={{ allCountries, displayingCountries, setDisplayingCountries }}>{children}</CountriesContext.Provider>;
};
