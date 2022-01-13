import React, { memo } from 'react';
import cn from 'classnames';
import ErrorMessage from '../UI/ErrorMessage';
import usePosts from '../../hooks/usePosts';
import classes from './UserPosts.module.scss';
import CapitalizeFirstLetter from '../../utils/CapitalizeFirstLetter';

const UserPosts = memo(({ userId, className }) => {
  const { posts = [], isError } = usePosts();

  if (isError) {
    return <ErrorMessage item="Could not load posts." />;
  }

  return (
    <div className={cn(classes.userPosts, className)}>
      {posts
        ?.filter((item) => item.userId === userId)
        .map((item) => (
          <div key={item.id}>
            <div className={classes.postTitle}>{CapitalizeFirstLetter(item.title)}</div>
            <div className={classes.postBody}>{CapitalizeFirstLetter(item.body)}</div>
          </div>
        ))}
    </div>
  );
});

export default UserPosts;
