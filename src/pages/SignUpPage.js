import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../components/firebase";
import * as ROUTES from "../constants/routes";
import { compose } from "recompose";
import { SignInLink } from "../pages/SignInPage";

// CHANGE ERROR MESSAGE RETURN

const INITIAL_STATE = {
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const SignUpPage = () => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm />
    <SignInLink />
  </div>
);

class SignUpFormBase extends Component {
  state = {
    ...INITIAL_STATE
  };

  componentDidMount() {
    console.log("FIREBASE", this.props.firebase);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  onSubmit = async e => {
    const { email, passwordOne } = this.state;

    console.log(`Create user with email ${email}`);

    this.props.firebase
      .create_user_with_email_and_password(email, passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({
          error
        });
      });
    e.preventDefault();
  };

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === "" || email === "";

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            placeholder="email"
            name="email"
            type="text"
            value={email}
            onChange={e => this.onChange(e)}
          />
          <input
            placeholder="Password"
            name="passwordOne"
            type="password"
            value={passwordOne}
            onChange={this.onChange}
          />
          <input
            placeholder="Password"
            name="passwordTwo"
            type="password"
            value={passwordTwo}
            onChange={this.onChange}
          />
          <button value="Submit" type="submit" disabled={isInvalid}>
            Sign Up
          </button>
          {/* {error && error} */}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    <Link to={ROUTES.SIGN_UP}>Don't have an account? Sign up.</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export { SignUpForm, SignUpLink };

export default SignUpPage;
