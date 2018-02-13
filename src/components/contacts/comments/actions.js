import axios from 'axios';
import {
	GET_COMMENTS,
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
