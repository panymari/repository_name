import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import refreshTokenSetUp from '../utils/refreshTokenSetUp';
import classes from './Log.module.scss';
import { getData } from '../redux/reducer/googleUser/gooleUserSlice';

const LogIn = () => {
  const clientId = process.env.REACT_APP_GOOGLE_TOKEN;

  const dispatch = useDispatch();

  const onSuccess = (res) => {
    console.log('[LogIn Success] currentUser:', res.profileObj);
    dispatch(getData(res.profileObj));
    refreshTokenSetUp(res);
  };
  const onFailure = (res) => {
    console.log('[LogIn failed] res:', res);
  };
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
