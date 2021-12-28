import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import classes from './App.module.scss';

const Users = lazy(() => import('./components/User/Users'));
const UserPage = lazy(() => import('./components/User/UserPage'));

const App = () => {
  return (
    <Router>
      <div className={classes.App}>
        <Header />

        <Suspense fallback="Loading page...">
          <Redirect to="/" />
          <Switch>
            <Route component={Users} path="/users" />
            <Route component={UserPage} path="/user/:id" />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
