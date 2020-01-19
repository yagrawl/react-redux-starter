import React, { PureComponent } from 'react';
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';

import Home from './pages/home';
import Auth from './pages/auth';
import Profile from './pages/profile';

class Routes extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
