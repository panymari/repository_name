import React, { useMemo, useState } from 'react';
import { GoogleUserContext } from '../context/GoogleUserContext';

const GoogleUserContextProvider = ({ children }) => {
  const [googleUser, setGoogleUser] = useState(null);
  const valuesGoogleUser = useMemo(() => ({ googleUser, setGoogleUser }), [googleUser, setGoogleUser]);
  return <GoogleUserContext.Provider value={valuesGoogleUser}>{children}</GoogleUserContext.Provider>;
};
export default GoogleUserContextProvider;
