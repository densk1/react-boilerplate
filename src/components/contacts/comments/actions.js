import axios from 'axios';
import {
	GET_COMMENTS,
	ADD_COMMENT,
	NEW_COMMENT_TEXT,
} from './types';


export const getComments = ( clientID ) => dispatch => {
	axios.post('/crm/client/comments', {clientID})
	.then( res => {
		dispatch({ type: GET_COMMENTS, payload: res.data.reverse() })
	})
    .catch( err => {
		dispatch({ type: GET_COMMENTS, payload: false });
	})	
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