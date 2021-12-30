import { useEffect, useContext } from 'react';
import useFetch from './useFetch';
import { UserContext } from '../components/User/UserContext';

const useUsers = () => {
  const { users, setUsers } = useContext(UserContext);
  const { isLoading, isError, data, getData } = useFetch('https://jsonplaceholder.typicode.com/users');
  useEffect(() => {
    if (!users) {
      getData();
    }
  }, [users, getData]);
  useEffect(() => {
    if (data && data.length) {
      setUsers(data);
    }
  }, [data, setUsers]);
  return { data, users, isLoading, isError };
};

export default useUsers;
