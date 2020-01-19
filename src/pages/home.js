import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import SignIn from '../components/helpers/signin';

class Home extends Component {
  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to="/profile" />
    } else {
      return (
        <div>
          <p className="title-text">Hi, login to continue.</p>
          <SignIn/>
        </div>
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

export default connect(mapStateToProps)(Home);
