import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './UserPage.module.scss';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';
import useUsers from '../../Hooks/useUsers';
import UserPosts from './UserPosts';
import AddUser from '../UI/AddUser';

const UserPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const { users = [], isLoading, isError } = useUsers();

  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage className={classes.errorMessage} item="Could not load this user." />;
  }

  return (
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
      <AddUser className={classes.addUser} userIdValue={id} />
      <UserPosts className={classes.userPosts} userId={id} />
    </div>
  );
};

export default UserPage;
