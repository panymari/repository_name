import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Users.module.scss';
import User from './User';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';
import useUsers from '../../Hooks/useUsers';

const Users = () => {
  const { users = [], isLoading, isError } = useUsers();

  if (users?.length) {
    return (
      <div className={classes.users}>
        {users?.map((item) => (
          <Link key={item.id} to={`/user/${item.id}`}>
            <User item={item} />
          </Link>
        ))}
      </div>
    );
  }

  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage className={classes.errorMessage} item="Could not load users." />;
  }

  return null;
};

export default Users;
