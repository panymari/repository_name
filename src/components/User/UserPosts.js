import React, { memo } from 'react';
import cn from 'classnames';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';
import usePosts from '../../Hooks/usePosts';
import classes from './UserPosts.module.scss';

const UserPosts = memo(({ userId, className }) => {
  const { posts = [], isLoading, isError } = usePosts();

  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage item="Could not load this user." />;
  }

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className={cn(classes.userPosts, className)}>
      {posts
        ?.filter((item) => item.userId === userId)
        .map((item) => (
          <div key={item.id}>
            <div className={classes.postTitle}>{capitalizeFirstLetter(item.title)}</div>
            <div className={classes.postBody}>{capitalizeFirstLetter(item.body)}</div>
          </div>
        ))}
    </div>
  );
});

export default UserPosts;
