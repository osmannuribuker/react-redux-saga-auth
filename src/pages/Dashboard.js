import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
import { getProductAction } from "../actions/productActions";
import SecureLayout from "../components/SecureLayout";

class DashboardPage extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch(getProductAction(1));
    }
  }
  render() {
    console.log(this.props.data);
    return (
      <SecureLayout>
        <div>
          <ul>
            <li>{this.props.data.name}</li>
          </ul>
        </div>
      </SecureLayout>
    );
  }
}

const mapStateToProps = (response) => ({
  data: response.products,
});

export default connect(mapStateToProps)(DashboardPage);
