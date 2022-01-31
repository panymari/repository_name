import React, { memo, useEffect } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import ErrorMessage from '../UI/ErrorMessage';
import classes from './UserPosts.module.scss';
import CapitalizeFirstLetter from '../../utils/CapitalizeFirstLetter';
import { setData } from '../../redux/reducer/posts/postsSlice';

const UserPosts = memo(({ userId, className }) => {
  const dispatch = useDispatch();

  const { posts, isError } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(setData());
  }, [dispatch]);

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
