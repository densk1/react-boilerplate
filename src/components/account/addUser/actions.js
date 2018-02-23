import axios from 'axios';
import {
	ADD_NEW_USER,
} from './types';

export const addNewUser =  (values, CB) => async (dispatch) => { 
console.log("Add New Users", {values});
	try {
		let res = await axios.post('/account/adduser',{values}, CB);
		console.log("Add User Success");
		dispatch({ type: ADD_NEW_USER, payload: res.data })
	} catch (e) {
		dispatch({ type: "SERVER_ERROR", payload: e.status })
		console.warn("Add User ERROR", e);
		
	}
}