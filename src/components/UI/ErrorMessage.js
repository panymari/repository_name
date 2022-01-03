import React from 'react';
import cn from 'classnames';
import classes from './ErrorMessage.module.scss';

const ErrorMessage = ({ item, className }) => {
  return (
    <div className={cn(classes.error, className)}>
      <i className="fa fa-exclamation-circle fa-2x" />
      <div>{item}</div>
    </div>
  );
};
export default ErrorMessage;
