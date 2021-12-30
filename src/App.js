import React, { Suspense, lazy, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import classes from './App.module.scss';
import { UserContext } from './components/User/UserContext';

const Users = lazy(() => import('./components/User/Users'));
const UserPage = lazy(() => import('./components/User/UserPage'));

const App = () => {
  const [users, setUsers] = useState(null);
  const values = useMemo(() => ({ users, setUsers }), [users, setUsers]);
  return (
    <Router>
      <div className={classes.App}>
        <Header />

        <Suspense fallback="Loading page...">
          <Redirect to="/" />
          <Switch>
            <UserContext.Provider value={values}>
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
