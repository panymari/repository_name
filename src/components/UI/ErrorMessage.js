import React from 'react';
import classes from './ErrorMessage.module.scss';

const ErrorMessage = ({ item }) => {
  return (
    <div className={classes.error}>
      <i className="fa fa-exclamation-circle fa-2x" />
      <div>{item}</div>
    </div>
  );
};
export default ErrorMessage;
