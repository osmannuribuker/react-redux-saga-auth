import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { loginUserAction } from "../actions/authenticationActions";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  componentDidUpdate() {
    if (this.props.response.login.response?.access) {
      this.setState({ isLogin: true });
    }
  }
  onHandleLogin = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username,
      password,
    };
    this.props.dispatch(loginUserAction(data));
  };

  render() {
    if (this.state.isLogin) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <h3>Login Page</h3>
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="username">username</label>
            <input type="username" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        Don't have account? <Link to="register">Register here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);
