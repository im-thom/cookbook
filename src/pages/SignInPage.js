import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../components/firebase";
import * as ROUTES from "../constants/routes";
import { compose } from 'recompose';
import { SignUpLink } from "../pages/SignUpPage";
import { ForgotPasswordLink } from "../components/ForgotPassword";

// CHANGE ERROR MESSAGE RETURN

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
  <SignUpLink />
  <ForgotPasswordLink />
  </div>
);

class SignInFormBase extends Component {
  state = {
    ...INITIAL_STATE
  };

//   componentDidMount() {
//       console.log('FIREBASE', this.props.firebase)
//   }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state)
  };

  onSubmit = async e => {
    const { email, password } = this.state;

    console.log(`Sign in with email: ${email}`);

    this.props.firebase.sign_in_with_email_and_password(email, password).then(() => {
        // Clear and reset state to initial state
        this.setState({ ...INITIAL_STATE });
        // Send user to homescreen if successfully logged in
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        // Display an error message to the user
          this.setState({
              error
          })
      });
    e.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid =
    password === "" || email === "";

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
            name="password"
            type="password"
            value={password}
            onChange={this.onChange}
          />
          <button value="Submit" type="submit" disabled={isInvalid}>
            Sign In
          </button>
          {/* {error && error} */}
        </form>
      </div>
    );
  }
}

const SignInLink = () => (
  <p>
    <Link to={ROUTES.SIGN_IN}>Already have an account? Sign in here.</Link>
  </p>
);

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export {SignInForm, SignInLink}

export default SignInPage;
