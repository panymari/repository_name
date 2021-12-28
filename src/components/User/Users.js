import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Users.module.scss';
import User from './User';
import useFetch from '../Hooks/useFetch';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';

const Users = () => {
  const { isLoading, isError, data } = useFetch('https://jsonplaceholder.typicode.com/users');
  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
  return (
    <div className={classes.users}>
      {data?.map((item) => (
        <Link to={`/user/${item.id}`}>
          <User item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Users;
