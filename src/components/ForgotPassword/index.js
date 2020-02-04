import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withFirebase } from "../firebase";
import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";

// CHANGE ERROR MESSAGE RETURN

const INITIAL_STATE = {
  email: "",
  error: null
};

const ForgotPasswordPage = () => (
  <div>
    <h1>Forgot Password</h1>
    <ForgotPasswordForm />
  </div>
);

class ForgotPasswordFormBase extends Component {
  state = {
    ...INITIAL_STATE
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state[event.target.name])
  };

  onSubmit = async e => {
    const { email } = this.state;

    console.log(`Requesting password change email for: ${email}`);

    this.props.firebase.reset_password(email).then(() => {
        // Clear and reset state to initial state
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        // Display an error message to the user
        this.setState({
          error
        });
      });
    e.preventDefault();
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

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
          <button value="Submit" type="submit" disabled={isInvalid}>
            Reset Password
          </button>
          {/* {error && error} */}
        </form>
      </div>
    );
  }
}

const ForgotPasswordLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_RESET}>Forgot Password?</Link>
  </p>
);

const ForgotPasswordForm = withFirebase(ForgotPasswordFormBase);

export { ForgotPasswordForm, ForgotPasswordLink };

export default ForgotPasswordPage;
