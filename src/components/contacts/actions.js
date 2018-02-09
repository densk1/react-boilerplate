import axios from 'axios';
import {
	FIND_CONTACT,
    GET_LIST
} from './types';

export const getList = ( offset = null, amount = null ) => dispatch => {
    axios.post('/crm/list', { offset, amount })
    .then( res => {
        dispatch({ type: GET_LIST, payload: res.data });
    })
    .catch( err => {
        dispatch({ type: GET_LIST, payload: false });
    });
}

export const findContact = (queryString = '') =>  dispatch => { 
	axios.post('/crm/search', { query: queryString})
	.then( res => {
		dispatch({ type: FIND_CONTACT, payload: res.data })
	})
    .catch( err => {
		dispatch({ type: FIND_CONTACT, payload: false });
        // redirect
        // console.log(err.response);
		// console.log(err.data);
		// console.log(err.response.status);
	})
	
}