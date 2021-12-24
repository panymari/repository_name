import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import classes from './App.module.scss';
import UserPage from './components/User/UserPage';

const App = function () {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Router>
      <div className={classes.App}>
        <Header data={users} />

        <Suspense fallback="Loading page...">
          <Redirect to="/" />
          <Switch>
            <Route exact path="/user/:id" render={(props) => <UserPage {...props} data={users} />} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
