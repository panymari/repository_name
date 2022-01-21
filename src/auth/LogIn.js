import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import refreshTokenSetUp from '../utils/refreshTokenSetUp';
import { GoogleUserContext } from '../context/GoogleUserContext';
import classes from './Log.module.scss';

const LogIn = () => {
  const clientId = process.env.REACT_APP_GOOGLE_TOKEN;
  const { setGoogleUser } = useContext(GoogleUserContext);

  const onSuccess = (res) => {
    console.log('[LogIn Success] currentUser:', res.profileObj);
    setGoogleUser(res.profileObj);
    refreshTokenSetUp(res);
  };
  const onFailure = (res) => {
    console.log('[LogIn failed] res:', res);
  };
  console.log(clientId);
  return (
    <div className={classes.logIn}>
      <GoogleLogin
        buttonText="LogIn"
        clientId={clientId}
        cookiePolicy="single_host_origin"
        isSignedIn
        onFailure={onFailure}
        onSuccess={onSuccess}
        render={(renderProps) => (
          <button
            disabled={renderProps.disabled}
            onClick={renderProps.onClick}
            style={{
              fontSize: '1rem',
              position: 'absolute',
              width: '16rem',
              height: '3.75rem',
              top: '0',
              left: '0',
              textAlign: 'start',
              paddingLeft: '3.25rem',
            }}
          >
            <i aria-hidden="true" className="fa fa-sign-in" style={{ marginRight: '1rem' }} /> LogIn
          </button>
        )}
      />
    </div>
  );
};
export default LogIn;
