import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from '../elements/logo';
import Login from '../elements/login';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="logo-div">
          <Logo link="/" />
        </div>
        <div className="login-div">
          <Login />
        </div>
        <div className="clear"></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(NavBar);
