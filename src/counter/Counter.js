import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.scss';
import { decrement, increment } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={classes.counter}>
      <div className={classes.countValue}>{count}</div>
      <button aria-label="Increment value" className={classes.countButton} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button aria-label="Decrement value" className={classes.countButton} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
};
export default Counter;
