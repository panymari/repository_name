import React from 'react';
// import { useParams } from 'react-router-dom';
import LoadProgressBar from '../UI/LoadProgressBar';
import ErrorMessage from '../UI/ErrorMessage';
import usePosts from '../../Hooks/usePosts';

const UserPosts = () => {
  //   const params = useParams();
  //   const id = Number(params.id);
  const { posts = [], isLoading, isError } = usePosts();
  if (isLoading) {
    return <LoadProgressBar />;
  }
  if (isError) {
    return <ErrorMessage item="Could not load this user." />;
  }

  const groupById = (objectArray, property) => {
    return objectArray?.reduce((total, obj) => {
      const key = obj[property];
      if (!total[key]) {
        total[key] = [];
      }
      total[key].push(obj);
      return total;
    }, {});
  };

  const groupedPosts = groupById(posts, 'userId');

  console.log(groupedPosts);

  return (
    <div>
      {posts?.map((item) => (
        <div key={item.id}>{item.userId}</div>
      ))}
    </div>
  );
};

export default UserPosts;
