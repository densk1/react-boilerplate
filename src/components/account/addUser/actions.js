import axios from 'axios';

import { reset } from 'redux-form';
import {
  ADD_NEW_USER,
  CLEAR_NEW_USER,
} from './types';

export const addNewUser = values => async (dispatch) => {
  try {
    const res = await axios.post('/account/adduser', { values });
    dispatch({ type: ADD_NEW_USER, payload: res.data });
    dispatch(reset('AddUser'));
    setTimeout(() => {
      dispatch({ type: CLEAR_NEW_USER, payload: false });
    }, 5000);
  } catch (e) {
    dispatch({ type: 'SERVER_ERROR', payload: e.status });
  }
};
