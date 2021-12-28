import React from 'react';
import classes from './LoadProgressBar.module.scss';

const LoadProgressBar = () => {
  return (
    <div className={classes.loadingBox}>
      <div className={classes.loader} />
    </div>
  );
};
export default LoadProgressBar;
