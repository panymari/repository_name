import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Users.module.scss';
import User from './User';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';
import { UserContext } from './UserContext';

const Users = () => {
  const { isLoading, isError, data } = useContext(UserContext);
  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage item="Could not load users." />;
  }
  return (
    <div className={classes.users}>
      {data?.map((item) => (
        <Link key={item.id} to={`/user/${item.id}`}>
          <User item={item} />
        </Link>
      ))}
    </div>
  );
};

export default Users;
