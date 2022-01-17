import React from 'react';
import PostContextProvider from './PostContextProvider';
import UserContextProvider from './UserContextProvider';

const Providers = ({ children }) => {
  return (
    <PostContextProvider>
      <UserContextProvider>{children}</UserContextProvider>
    </PostContextProvider>
  );
};
export default Providers;
