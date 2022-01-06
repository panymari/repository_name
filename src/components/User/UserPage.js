import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './UserPage.module.scss';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';
import useUsers from '../../Hooks/useUsers';
import UserPosts from './UserPosts';
import { useIsMounted } from '../../Hooks/useIsMounted';

const UserPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const { users = [], isLoading, isError } = useUsers();
  const isMounted = useIsMounted();

  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage className={classes.errorMessage} item="Could not load this user." />;
  }
  return isMounted ? (
    <div>
      <div className={classes.userPage}>
        {users
          ?.filter((item) => item.id === id)
          .map((item) => (
            <div className={classes.profile} key={item.id}>
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
      <UserPosts />
    </div>
  ) : null;
};

export default UserPage;
