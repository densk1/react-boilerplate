import axios from 'axios';
import {
	FIND_CONTACT,
} from './types';

export const findContact = (queryString = '') =>  dispatch => { 
	axios.post('/crm/search', { query: queryString})
	.then( res => {
		dispatch({ type: FIND_CONTACT, payload: res.data.RESULT })
	}).catch( err =>{
		dispatch({ type: "FIND_FAILED", payload: null });
        // redirect
        // console.log(err.response);
		// console.log(err.data);
		// console.log(err.response.status);
	})
	
}