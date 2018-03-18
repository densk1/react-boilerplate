import axios from 'axios';
import {
  GET_CONTACT,
  CLEAR_CARD,
  UPDATE_CARD,
  EDIT_CARD,
  DELETE_CONTACT,
} from './types';

export const getContact = (clientID = null) => (dispatch) => {
  axios.post('/crm/client/', { clientID })
    .then((res) => {
      dispatch({ type: GET_CONTACT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_CONTACT, payload: false });
      // console.log(err.response, err.data, err.response.status);
    });
};

export const clearCard = () => (dispatch) => {
  dispatch({ type: CLEAR_CARD, payload: false });
};

export const updateContact = values => (dispatch) => {
  axios.post('/crm/client/update', { values })
    .then((res) => {
      dispatch({ type: UPDATE_CARD, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: UPDATE_CARD, payload: false });
    });
};
export const deleteContact = contactID => (dispatch) => {
  axios.post('/crm/contact/delete', { contactID })
    .then((res) => {
      dispatch({ type: DELETE_CONTACT, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: DELETE_CONTACT, payload: false });
    });
};


export const editCard = bool => (dispatch) => {
  dispatch({ type: EDIT_CARD, payload: (bool || false) });
};
