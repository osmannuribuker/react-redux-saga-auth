import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { verifyTokenAction } from "../actions/authenticationActions";

class SecureLayout extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(verifyTokenAction(1));
    }
  }

  render() {
    const { children, response } = this.props;
    const isLogin =
      response.verifyToken.response &&
      response.verifyToken.response.username &&
      response.verifyToken.response.email;
    if (!isLogin && !response.verifyToken.response?.code) {
      return <h1>loading</h1>;
    }
    if (!isLogin && window.location.pathname !== "/login") {
      return <Redirect to="/login" />;
    }
    return children;
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(SecureLayout);
