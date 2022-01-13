import React, { Suspense, lazy, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import classes from './App.module.scss';
import { UserContext } from './context/UserContext';
import { UserPostContext } from './context/UserPostContext';

const Users = lazy(() => import('./components/User/Users'));
const UserPage = lazy(() => import('./components/User/UserPage'));
const UserAuthorization = lazy(() => import('./components/User/UserAuthorization'));

const App = () => {
  const [users, setUsers] = useState(null);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [isUsersError, setIsUsersError] = useState(false);
  const valuesUsers = useMemo(
    () => ({ users, setUsers, isUsersLoading, setIsUsersLoading, isUsersError, setIsUsersError }),
    [users, setUsers, isUsersLoading, setIsUsersLoading, isUsersError, setIsUsersError]
  );

  const [posts, setPosts] = useState(null);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isPostsError, setIsPostsError] = useState(false);
  const valuesPosts = useMemo(
    () => ({ posts, setPosts, isPostsLoading, setIsPostsLoading, isPostsError, setIsPostsError }),
    [posts, setPosts, isPostsLoading, setIsPostsLoading, isPostsError, setIsPostsError]
  );
  return (
    <Router>
      <div className={classes.App}>
        <Suspense fallback="Loading page...">
          <UserContext.Provider value={valuesUsers}>
            <Header />
            <Switch>
              <Route component={Users} path="/users" />
              <Route component={UserAuthorization} path="/authorization" />
              <UserPostContext.Provider value={valuesPosts}>
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
