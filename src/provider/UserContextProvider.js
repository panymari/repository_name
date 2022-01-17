import React, { useMemo, useState } from 'react';
import { UserContext } from '../context/UserContext';

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isUsersLoading, setIsUsersLoading] = useState(false);
  const [isUsersError, setIsUsersError] = useState(false);
  const valuesUsers = useMemo(
    () => ({ users, setUsers, isUsersLoading, setIsUsersLoading, isUsersError, setIsUsersError }),
    [users, setUsers, isUsersLoading, setIsUsersLoading, isUsersError, setIsUsersError]
  );

  return <UserContext.Provider value={valuesUsers}>{children}</UserContext.Provider>;
};
export default UserContextProvider;
