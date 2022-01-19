import React from 'react';
import { GoogleLogin } from 'react-google-login';
import refreshTokenSetUp from '../utils/refreshTokenSetUp';

const clientId = process.env.GOOGLE_TOKEN;

const LogIn = () => {
  const onSuccess = (res) => {
    console.log('[LogIn Success] currentUser:', res.profileObj);
    localStorage.setItem('user', JSON.stringify(res.profileObj));
    refreshTokenSetUp(res);
  };
  const onFailure = (res) => {
    console.log('[LogIn failed] res:', res);
  };
  return (
    <div>
      <GoogleLogin
        buttonText="LogIn"
        clientId={clientId}
        cookiePolicy="single_host_origin"
        isSignedIn
        onFailure={onFailure}
        onSuccess={onSuccess}
        render={(renderProps) => (
          <button disabled={renderProps.disabled} onClick={renderProps.onClick} style={{ fontSize: '1rem' }}>
            <i aria-hidden="true" className="fa fa-sign-in" style={{ marginRight: '1rem' }} /> LogIn
          </button>
        )}
      />
    </div>
  );
};
export default LogIn;
