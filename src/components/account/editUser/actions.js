import axios from 'axios';
import {
	GET_USERS,
	UPDATE_USER,
	DELETE_USER,
} from './types';



export const getUsers = () => async dispatch => {
	try {
		let res = await axios.post('/account/users');
		dispatch({ type: GET_USERS, payload: res.data })
	} catch (e) {
		//console.warn("GU ERROR",e)
		dispatch({ type: "FAIL_DELETE_USER" , payload: false })
	}
}

export const updateUser = (userID, admin ) => async dispatch => {
	
	try {
		let res = await axios.post('/account/users/update', { userID, admin });
		dispatch({ type: UPDATE_USER, payload: res.data })
	} catch (e) {
		console.warn(e)
		dispatch({ type: "FAIL_DELETE_USER", payload: e.status })
	}
}

export const deleteUser = (delUserID, index) => async dispatch => {
	try {
		let res = await axios.post('/account/users/delete',{delUserID, index});
		dispatch({ type: DELETE_USER, payload: res.data })
	} catch (e) {
		console.warn(e)
		dispatch({ type: "FAIL_DELETE_USER" , payload: e.status })
	}
}