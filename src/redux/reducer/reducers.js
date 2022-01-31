import { combineReducers } from 'redux';
import usersReducer from './users/usersSlice';
import postsReducer from './posts/postsSlice';
import gooleUserReducer from './googleUser/gooleUserSlice';

export default combineReducers({
  users: usersReducer,
  posts: postsReducer,
  googleUser: gooleUserReducer,
});
