import { combineReducers } from 'redux';
import usersReducer from './users/usersSlice';
import postsReducer from './posts/postsSlice';
import googleUserReducer from './googleUser/gooleUserSlice';

const rootReducer = () =>
  combineReducers({
    users: usersReducer,
    posts: postsReducer,
    googleUser: googleUserReducer,
  });

export default rootReducer;
