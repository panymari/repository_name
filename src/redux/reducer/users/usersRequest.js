import axios from 'axios';
// import { loading, setData, error } from './usersSlice';
// import * as actions from './usersSlice';

export const usersRequest = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};
