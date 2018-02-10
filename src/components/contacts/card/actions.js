import axios from 'axios';
import {
	GET_CONTACT,
} from './types';

export const getContact = (clientID = null) =>  dispatch => { 
	axios.post('/crm/client/'+clientID)
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