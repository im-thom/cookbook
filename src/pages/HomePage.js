import React from "react";
import { AuthUserContext } from "../components/session";
import SignOutButton from "../components/SignOutButton";
import SignInLink from "../pages/SignInPage";

const HomePage = () => {
  return (
    <AuthUserContext.Consumer>
      {authUser => authUser ? <SignOutButton /> : <SignInLink />}
        {/* Home
        <SignOutButton /> */}
    </AuthUserContext.Consumer>
  );
};

export default HomePage;
