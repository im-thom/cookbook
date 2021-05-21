import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container" style={{ margin: "1rem" }}>
      <NavLink to="/" style={{ padding: "1rem" }}>
        home page
      </NavLink>
      <NavLink to="/test" style={{ padding: "1rem" }}>
        test page
      </NavLink>
    </div>
  );
};

export default NavBar;
