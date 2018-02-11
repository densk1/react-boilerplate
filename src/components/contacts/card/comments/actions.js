import axios from 'axios';
import {
	//ADD_COMMENT,
	//ADD_COMMENT_FAILED,
	GET_COMMENTS,
} from './types';


export const getComments = ( clientID ) => dispatch => {
	//console.log( 'Get Comments for: ', clientID );
	axios.post('/crm/client/comments', {clientID})
	.then( res => {

		dispatch({ type: GET_COMMENTS, payload: res.data.reverse() })
	})
    .catch( err => {
		dispatch({ type: GET_COMMENTS });
	})
	
}