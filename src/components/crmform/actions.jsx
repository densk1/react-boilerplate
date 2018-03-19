import axios from 'axios';
import {
  LOAD_TO_FORM,
  ADD_NEW_CONTACT,
  CLEAR_NEW_CONTACT_ID,
} from './types';

export const addNewContact = newContact => (dispatch) => {
  axios.post('/crm/contact/new', {
    newContact,
  }).then((res) => {
    dispatch({ type: ADD_NEW_CONTACT, payload: res.data });
  }).catch((err) => {
    dispatch({ type: ADD_NEW_CONTACT, payload: '' });
  });
};

export const clearContactID = () => (dispatch) => {
  dispatch({ type: CLEAR_NEW_CONTACT_ID, payload: false });
};

export const load = data => ({
  type: LOAD_TO_FORM, data,
});
