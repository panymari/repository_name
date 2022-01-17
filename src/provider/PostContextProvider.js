import React, { useMemo, useState } from 'react';
import { UserPostContext } from '../context/UserPostContext';

const PostContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  const [isPostsLoading, setIsPostsLoading] = useState(false);
  const [isPostsError, setIsPostsError] = useState(false);
  const valuesPosts = useMemo(
    () => ({ posts, setPosts, isPostsLoading, setIsPostsLoading, isPostsError, setIsPostsError }),
    [posts, setPosts, isPostsLoading, setIsPostsLoading, isPostsError, setIsPostsError]
  );
  return <UserPostContext.Provider value={valuesPosts}>{children}</UserPostContext.Provider>;
};
export default PostContextProvider;
