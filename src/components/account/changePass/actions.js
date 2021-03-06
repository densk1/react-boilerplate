import axios from 'axios';
import { reset } from 'redux-form';

import {
  CHANGE_PASSWORD,
  CLEAR_CHANGE_PASSWORD,
  PW_CHANGE_FAIL,
} from './types';
// action
// dispatch(reset('myForm'));

export const changeUserPassword = values => async (dispatch) => {
  try {
    const res = await axios.post('/account/update/password', { ...values });
    dispatch({ type: CHANGE_PASSWORD, payload: res.data });
    dispatch(reset('changePassword'));
    setTimeout(() => {
      dispatch({ type: CLEAR_CHANGE_PASSWORD, payload: false });
    }, 5000);
  } catch (e) {
    dispatch({ type: PW_CHANGE_FAIL, payload: true });
    setTimeout(() => {
      dispatch({ type: CLEAR_CHANGE_PASSWORD, payload: false });
    }, 5000);
    // console.warn("Add User ERROR", e);
  }
};
