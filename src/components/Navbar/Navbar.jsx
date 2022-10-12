import React, { useContext } from "react";
import { DarkModeContext } from "../../context/darkMode/darkModeContext";

import "./Navbar.scss";
const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  function onDarkModeClick() {
    console.log("onDarkModeClick");
    dispatch({ type: "TOGGLE" });
  }
  return (
    <>
      <nav className="nav">
        <h1>Where in the world?</h1>
        <div>
          <p style={{ cursor: "pointer" }} onClick={onDarkModeClick}>
            Dark Mode{" "}
          </p>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
