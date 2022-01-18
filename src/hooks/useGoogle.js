import { useContext, useEffect } from 'react';
import { GoogleUserContext } from '../context/GoogleUserContext';

const useGoogle = () => {
  const { googleUser, setGoogleUser } = useContext(GoogleUserContext);
  useEffect(() => setGoogleUser(localStorage.getItem('user')), []);
  const googleUserObj = JSON.parse(googleUser);
  return { googleUserObj };
};

export default useGoogle;
