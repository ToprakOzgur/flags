import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>Navbar</nav>
      <Outlet />
    </>
  );
};

export default Navbar;
