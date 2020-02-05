import React from "react";
import NavBar from "./NavBar";
import AuthUserContext from "../session/context";

const NavBarWithAuth = () => {
  return <div className="navbar-container">navbar</div>;
};

const NavbarNoAuth = () => <div className="navbar-container">navbar WITHOUT AUTH</div>;

const Navbar = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavBarWithAuth /> : <NavbarNoAuth />)}
  </AuthUserContext.Consumer>
);

export default Navbar;
