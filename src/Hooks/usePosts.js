import { useEffect, useContext } from 'react';
import useFetch from './useFetch';
import { UserPostContext } from '../components/User/UserPostContext';

const usePosts = () => {
  const { posts, setPosts, isPostsLoading, setIsPostsLoading, isPostsError, setIsPostsError } = useContext(UserPostContext);
  const { isLoading, isError, data, getData } = useFetch('https://jsonplaceholder.typicode.com/posts');

  useEffect(() => {
    setIsPostsLoading(isLoading);
    setIsPostsError(isError);
  }, [isLoading, isError]);

  useEffect(() => {
    if (!posts && !isPostsLoading) {
      getData();
    }
  }, [posts]);

  useEffect(() => {
    if (data && data.length) {
      setPosts(data);
    }
  }, [data, setPosts]);

  if (isPostsLoading && !posts) {
    return { posts: null, isLoading: true, isError: false };
  }

  if (posts) {
    return { posts, isLoading: false, isError: false };
  }

  return { posts: posts || data, isLoading: isPostsLoading, isError: isPostsError };
};

export default usePosts;
