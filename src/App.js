import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import classes from './App.module.scss';
import { UserContext } from './components/User/UserContext';
import useFetch from './Hooks/useFetch';

const Users = lazy(() => import('./components/User/Users'));
const UserPage = lazy(() => import('./components/User/UserPage'));

const App = () => {
  const { isLoading, isError, data } = useFetch('https://jsonplaceholder.typicode.com/users');
  return (
    <Router>
      <div className={classes.App}>
        <Header />

        <Suspense fallback="Loading page...">
          <Redirect to="/" />
          <Switch>
            <UserContext.Provider values={{ isLoading, isError, data }}>
              <Route component={Users} path="/users" />
              <Route component={UserPage} path="/user/:id" />
            </UserContext.Provider>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
