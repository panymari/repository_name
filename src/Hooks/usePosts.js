import { useEffect, useContext } from 'react';
import useFetch from './useFetch';
import { UserPostContext } from '../components/User/UserPostContext';

const usePosts = () => {
  const { userPosts, setUserPosts } = useContext(UserPostContext);
  const { isLoading, isError, data, getData } = useFetch('https://jsonplaceholder.typicode.com/posts');
  useEffect(() => {
    if (!userPosts) {
      getData();
    }
  }, [userPosts]);
  useEffect(() => {
    if (data && data.length) {
      setUserPosts(data);
    }
  }, [data, setUserPosts]);
  return { posts: userPosts || data, isLoading, isError };
};

export default usePosts;
