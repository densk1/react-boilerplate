import axios from 'axios';
import {
  CHECK_LOGIN,
  CHECK_FAILED,
  DO_LOGIN,
  DO_LOGOUT,
  LOGIN_FAILED,
} from './types';


export const checkLogin = () => (dispatch) => {
  axios.post('/auth/checklogin', {
  }).then((res) => {
    dispatch({ type: CHECK_LOGIN, payload: res.data });
    return !!res.data.result;
  }).catch((err) => {
    dispatch({ type: CHECK_FAILED, payload: null, err });
    return false;
  });
};

export const doLogin = (emailAddress, password, stayLoggedIn) => (dispatch) => {
  axios.post('/auth/login', {
    emailAddress,
    password,
    stayLoggedIn,
  }).then((res) => {
    dispatch({ type: DO_LOGIN, payload: res.data.result });
  }).catch((err) => {
    dispatch({ type: LOGIN_FAILED, payload: err.response.status });
    setTimeout(() => {
      dispatch({ type: LOGIN_FAILED, payload: false });
    }, 5000);
    // console.log(err.response.status);
  });
};

export const doLogout = () => (dispatch) => {
  axios.post('/auth/logout')
    .then((res) => {
      dispatch({ type: DO_LOGOUT, payload: false, res });
    }).catch((err) => {
      dispatch({ type: DO_LOGOUT, payload: null, err });
    });
};
