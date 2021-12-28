import React from 'react';
import classes from './User.module.scss';

const User = ({ item }) => {
  return (
    <div className={classes.userItem}>
      <div className={classes.userIcon}>
        <i className="fa fa-user-circle fa-4x" />
      </div>
      <div>
        <div className={classes.name}>{item.name}</div>
        <div className={classes.userName}>@{item.username}</div>
      </div>
    </div>
  );
};

export default User;
