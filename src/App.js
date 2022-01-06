import React, { Suspense, lazy, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import classes from './App.module.scss';
import { UserContext } from './components/User/UserContext';
import { UserPostContext } from './components/User/UserPostContext';

const Users = lazy(() => import('./components/User/Users'));
const UserPage = lazy(() => import('./components/User/UserPage'));

const App = () => {
  const [users, setUsers] = useState(null);
  const values = useMemo(() => ({ users, setUsers }), [users, setUsers]);

  const [userPosts, setUserPosts] = useState(null);
  const valuesPost = useMemo(() => ({ userPosts, setUserPosts }), [userPosts, setUserPosts]);
  return (
    <Router>
      <div className={classes.App}>
        <Suspense fallback="Loading page...">
          <UserContext.Provider value={values}>
            <Header />
            <Switch>
              <Route component={Users} path="/users" />
              <UserPostContext.Provider value={valuesPost}>
                <Route component={UserPage} path="/user/:id" />
              </UserPostContext.Provider>
              <Redirect to="/" />
            </Switch>
          </UserContext.Provider>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
