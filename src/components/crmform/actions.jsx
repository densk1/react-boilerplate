import axios from 'axios';
import {
	LOAD_TO_FORM,
	ADD_NEW_CONTACT,
	EDIT_CARD

} from './types';

export const addNewContact = (newContact) => dispatch => {
	axios.post('/crm/contact/new', {
		newContact
	})
	.then( res => {
		dispatch({type: ADD_NEW_CONTACT, payload: res.data });
	})
	.catch( err => {
		dispatch({type: ADD_NEW_CONTACT, payload: '' });
	})
}



export const load = data => {
	return ({type: LOAD_TO_FORM, data})
}


export const editCard = (bool) => dispatch => {
	let bool = bool ? false : true;
	dispatch({ type: EDIT_CARD, payload: bool })
}