import { useEffect, useContext } from 'react';
import useFetch from './useFetch';
import { UserContext } from '../components/User/UserContext';

const useUsers = () => {
  const { users, setUsers, isUsersLoading, setIsUsersLoading, isUsersError, setIsUsersError } = useContext(UserContext);
  const { isLoading, isError, data, getData } = useFetch('https://jsonplaceholder.typicode.com/users');

  useEffect(() => {
    setIsUsersLoading(isLoading);
    setIsUsersError(isError);
  }, [isLoading, isError]);

  useEffect(() => {
    if (!users && !isUsersLoading) {
      getData();
    }
  }, [users]);

  useEffect(() => {
    if (data && data.length) {
      setUsers(data);
    }
  }, [data, setUsers]);

  if (isUsersLoading && !users) {
    return { users: null, isLoading: true, isError: false };
  }

  if (users) {
    return { users, isLoading: false, isError: false };
  }

  return { users: users || data, isLoading: isUsersLoading, isError: isUsersError };
};

export default useUsers;
