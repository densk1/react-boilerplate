import axios from 'axios';
import {
	GET_CONTACT,
	CLEAR_CARD,

	EDIT_CARD,
} from './types';

export const getContact = (clientID = null) =>  dispatch => { 
	axios.post('/crm/client/',{clientID})
	.then( res => {
		dispatch({ type: GET_CONTACT, payload: res.data })
	})
    .catch( err => {
		dispatch({ type: GET_CONTACT, payload: false });
        // console.log(err.response, err.data, err.response.status);
	})
}

export const clearCard = () => dispatch => {
	dispatch({type: CLEAR_CARD, payload: false });
}




export const editCard = (bool) => dispatch => {
	
	dispatch({ type: EDIT_CARD, payload: ( bool || false) })
}