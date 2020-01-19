import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
  render() {
    return (
      <Route {...this.props.rest} render={props => {
        return (
          this.props.isAuthenticated ?
          <this.props.Component {...this.props} /> :
          <Redirect to="/auth" />
        );
      }} />
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
  }
}

export default connect(mapStateToProps)(PrivateRoute);
