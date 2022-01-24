import axios from 'axios';
import { loading, getData, error } from './usersSlice';

export const loadUsersAsync = () => (dispatch) => {
  dispatch(loading());

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => dispatch(getData(response.data)))
    .catch((errorCatch) => dispatch(error(errorCatch.message)));
};
