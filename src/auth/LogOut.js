import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '364835572773-9a004jdd7i3mi2iq32n7fi7l96jnhulp.apps.googleusercontent.com';

const LogOut = () => {
  const onSuccess = () => {
    console.log('LogOut was made successfully');
    localStorage.clear();
  };
  return (
    <div>
      <GoogleLogout
        buttonText="LogOut"
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        render={(renderProps) => (
          <button disabled={renderProps.disabled} onClick={renderProps.onClick} style={{ fontSize: '1rem' }}>
            <i aria-hidden="true" className="fa fa-sign-out" style={{ marginRight: '1rem' }} /> LogOut
          </button>
        )}
      />
    </div>
  );
};
export default LogOut;
