import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import classes from './App.module.scss';
import Providers from './provider/Providers';
import Counter from './counter/Counter';

const Users = lazy(() => import('./components/User/Users'));
const UserPage = lazy(() => import('./components/User/UserPage'));

const App = () => {
  return (
    <Router>
      <div className={classes.App}>
        <Suspense fallback="Loading page...">
          <Providers>
            <Header />
            <Counter />
            <Switch>
              <Route component={Users} path="/users" />
              <Route component={UserPage} path="/user/:id" />
              <Redirect to="/" />
            </Switch>
          </Providers>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
