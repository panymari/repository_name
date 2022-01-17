import React from 'react';
import LogIn from '../../auth/LogIn';
import LogOut from '../../auth/LogOut';
import classes from './UserAuthorization.module.scss';

const UserAuthorization = () => {
  return (
    <form className={classes.formAuth}>
      <h3>Login Here</h3>
      <LogIn />
      <LogOut />
    </form>
  );
};
export default UserAuthorization;
