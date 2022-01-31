import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Users.module.scss';
import User from './User';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';
import { setData } from '../../redux/reducer/users/usersSlice';

const Users = () => {
  const dispatch = useDispatch();

  const { isLoading, users, isError } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setData());
  }, [dispatch]);

  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage className={classes.errorMessage} item="Could not load users." />;
  }

  return (
    <div className={classes.users}>
      {users?.map((item) => (
        <Link key={item.id} to={`/user/${item.id}`}>
          <User item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Users;
