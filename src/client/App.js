import React from 'react';
import { Redirect } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import Profile from './Containers/Profile/Profile';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Trip from './Containers/Trips/Trip';
import Trips from './Containers/Trips/Trips';
import NotFound from './Containers/NotFound/NotFound';
import Subscriptions from './Containers/Trips/Subscriptions';
import MyTrips from './Containers/Trips/MyTrips';
import isAuthorized from './Utils/isAuthorized';

const history = createBrowserHistory();
const App = () => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trips" component={Trips} />
        <Route exact path="/trips/:tripId" component={Trip} />
        <Route exact path="/subscriptions/:tripId" component={Trip} />
        <Route exact path="/mytrips/:tripId" component={Trip} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route
          path="/profile"
          render={({ location }) => (
            isAuthorized() ? (
              <Profile location={location} />
            ) : (
              <Redirect to="/" />
            )
          )}
        />
        <Route
          exact
          path="/subscriptions"
          render={() => (
            isAuthorized() ? (
              <Subscriptions />
            ) : (
              <Redirect to="/" />
            )
          )}
        />
        <Route
          exact
          path="/mytrips"
          render={() => (
            isAuthorized() ? (
              <MyTrips />
            ) : (
              <Redirect to="/" />
            )
          )}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </ConnectedRouter>
);

Profile.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
export default App;
