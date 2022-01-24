import axios from 'axios';
import { loading, getData, error } from './postsSlice';

export const loadPostsAsync = () => (dispatch) => {
  dispatch(loading());

  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => dispatch(getData(response.data)))
    .catch((errorCatch) => dispatch(error(errorCatch.message)));
};
