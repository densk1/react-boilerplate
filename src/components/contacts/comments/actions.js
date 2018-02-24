import axios from 'axios';
import {
	GET_COMMENTS,
	ADD_COMMENT,
	NEW_COMMENT_TEXT,
    DELETE_COMMENT,
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

export const addNewComment = (clientID, comment, author) => dispatch => {
	axios.post('/crm/client/comment/add', {
		clientID,
		comment,
		author
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

export const deleteComment = (clientID, commentID, index) => dispatch => {

    axios.post('/crm/client/comment/delete', {
        clientID,
		commentID,
        index
	})
	.then( res => {
		dispatch({ type: DELETE_COMMENT, payload: res.data.reverse() })
	})
	.catch( err => {
		dispatch({ type: DELETE_COMMENT, payload: null })
	})
}

