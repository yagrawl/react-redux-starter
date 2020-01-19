import React, { PureComponent } from 'react';
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';

import Home from './pages/home';
import Auth from './pages/auth';
import Profile from './pages/profile';

import NavBar from './components/layout/navbar';
import PrivateRoute from './components/helpers/privateroute';

class Routes extends PureComponent {
  render() {
    return (
      <Router>
        <div className="main">
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <PrivateRoute path="/profile" Component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;
