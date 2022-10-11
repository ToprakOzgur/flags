import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h2>404</h2>
      <p>page not found</p>
      <Link style={{ display: "block", margin: "1rem 0", color: "black" }} to="/">
        Back Home
      </Link>
    </section>
  );
};

export default Error;
