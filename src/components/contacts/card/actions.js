import axios from 'axios';
import {
	GET_CONTACT,
	CLEAR_CARD,
	ADD_COMMENT,
	ADD_COMMENT_FAILED,
} from './types';

export const getContact = (clientID = null) =>  dispatch => { 
	axios.post('/crm/client/',{clientID})
	.then( res => {
		dispatch({ type: GET_CONTACT, payload: res.data })
	})
    .catch( err => {
		dispatch({ type: GET_CONTACT, payload: false });
        // redirect
        // console.log(err.response);
		// console.log(err.data);
		// console.log(err.response.status);
	})
}

export const clearCard = () => dispatch => {
	dispatch({type: CLEAR_CARD, payload: false });
}


export const addNewComment = (clientID, comment) => dispatch => {
	axios.post('/crm/client/comment/add', {
		clientID,
		comment
	})
	.then( res => {
		dispatch({type: ADD_COMMENT, payload: res.data });
	})
	.catch( err => {
		dispatch({ type: ADD_COMMENT_FAILED });
		
	})
}