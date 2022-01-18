import React from 'react';
import GoogleUserContextProvider from './GoogleUserContextProvider';
import PostContextProvider from './PostContextProvider';
import UserContextProvider from './UserContextProvider';

const Providers = ({ children }) => {
  return (
    <GoogleUserContextProvider>
      <PostContextProvider>
        <UserContextProvider>{children}</UserContextProvider>
      </PostContextProvider>
    </GoogleUserContextProvider>
  );
};
export default Providers;
