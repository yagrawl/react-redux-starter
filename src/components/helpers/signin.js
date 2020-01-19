import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loginAction,
         loadingAction,
         logoutAction,
         authErrorAction } from '../../actions';

class SignIn extends Component {
  constructor() {
    super();

    this.successAuthResponse = this.successAuthResponse.bind(this);
    this.failureAuthResponse = this.failureAuthResponse.bind(this);
    this.logout = this.logout.bind(this);
  }

  successAuthResponse(response) {
    let { profileObj } = response;
    this.props.handleLogin(profileObj);
  }

  failureAuthResponse(response) {
    console.log(response);
  }

  logout() {
    this.props.handleLogout();
  }

  render() {
    if(this.props.isAuthenticated) {
      return <div></div>
    } else {
      return (
        <GoogleLogin
          clientId="GOOGLE_CLIENT_ID"
          render={renderProps => (
                <button onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="login-button">Login</button>
          )}
          buttonText="Login"
          onSuccess={this.successAuthResponse}
          onFailure={this.failureAuthResponse}
          cookiePolicy={'single_host_origin'}
        />
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    loading: state.auth.loading,
    error: state.auth.error
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleLogin: loginAction,
    handleLoading: loadingAction,
    handleLogout: logoutAction,
    handleAuthError: authErrorAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
