import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/" style={{ padding: "1rem" }}>
        home page
      </NavLink>
      <NavLink to="/test" style={{ padding: "1rem" }}>
        test page
      </NavLink>
      <NavLink to="/recipes" style={{ padding: "1rem" }}>
        recipes page
      </NavLink>
    </div>
  );
};

export default NavBar;
