import axios from 'axios';
import {
	GET_CONTACT,
	CLEAR_CARD,
	ADD_COMMENT,

	NEW_COMMENT_TEXT
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


export const addNewComment = (clientID, comment) => dispatch => {
	axios.post('/crm/client/comment/add', {
		clientID,
		comment
	})
	.then( res => {
		dispatch({type: ADD_COMMENT, payload: res.data });
	})
	.catch( err => {
		dispatch({type: ADD_COMMENT, payload: '' });
	})
}

export const newCommentText = ( newText ) => dispatch => {
	dispatch({ type: NEW_COMMENT_TEXT, payload: newText })
} 