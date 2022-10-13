import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode/darkModeContext";
import { FaRegMoon, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Navbar.scss";
const Navbar = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  console.log(darkMode);
  function onDarkModeClick() {
    dispatch({ type: "TOGGLE" });
  }
  return (
    <>
      <nav className="nav">
        <Link className="link" to="/">
          <h1>Where in the world?</h1>
        </Link>

        <div className="theme-button">
          {darkMode ? <FaMoon /> : <FaRegMoon />}

          <p style={{ cursor: "pointer" }} onClick={onDarkModeClick}>
            Dark Mode
          </p>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
