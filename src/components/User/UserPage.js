import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './UserPage.module.scss';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';
import useFetch from '../Hooks/useFetch';

const UserPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const { isLoading, isError, data } = useFetch('https://jsonplaceholder.typicode.com/users');
  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage />;
  }
  return (
    <div className={classes.userPage}>
      {data
        ?.filter((item) => item.id === id)
        .map((item) => (
          <div className={classes.profile}>
            <div className={classes.userPhoto}>
              <i className="fa fa-user-circle fa-5x" />
            </div>
            <div>
              <div className={classes.name}>{item.name}</div>
              <div className={classes.userName}>@{item.username}</div>
              <div>
                <span>Phone: </span>
                {item.phone}
              </div>
              <div>
                <span>Email: </span>
                {item.email}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserPage;
