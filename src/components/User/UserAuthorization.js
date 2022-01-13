import React from 'react';
import classes from './UserAuthorization.module.scss';

const UserAuthorization = () => {
  return (
    <form className={classes.formAuth}>
      <h3>Login Here</h3>

      <div className={classes.label} htmlFor="username">
        Username
      </div>
      <input className={classes.inputEmail} name="email" placeholder="Email or Phone" type="text" />

      <div className={classes.label} htmlFor="password">
        Password
      </div>
      <input className={classes.inputPassword} name="password" placeholder="Password" type="password" />

      <div lassName={classes.social}>
        <div className={classes.google}>
          <i className="fa fa-google fa-2x" /> Google
        </div>
        <div className={classes.facebook}>
          <i className="fa fa-facebook fa-2x" /> Facebook
        </div>
      </div>

      <input className={classes.logInButton} type="submit" value="Log In" />
    </form>
  );
};
export default UserAuthorization;
