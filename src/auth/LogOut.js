import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import classes from './Log.module.scss';
import { getData } from '../redux/reducer/googleUser/gooleUserSlice';

const LogOut = () => {
  const clientId = process.env.REACT_APP_GOOGLE_TOKEN;
  const dispatch = useDispatch();
  const onSuccess = () => {
    console.log('LogOut was made successfully');
    dispatch(getData(null));
  };
  return (
    <div className={classes.logOut}>
      <GoogleLogout
        buttonText="LogOut"
        clientId={clientId}
        onLogoutSuccess={onSuccess}
        render={(renderProps) => (
          <button
            disabled={renderProps.disabled}
            onClick={renderProps.onClick}
            style={{
              fontSize: '1rem',
              position: 'absolute',
              width: '27rem',
              height: '3.75rem',
              top: '0',
              left: '0',
              textAlign: 'start',
              paddingLeft: '3.25rem',
            }}
          >
            <i aria-hidden="true" className="fa fa-sign-out" style={{ marginRight: '1rem' }} /> LogOut
          </button>
        )}
      />
    </div>
  );
};
export default LogOut;
