import axios from 'axios';
import {
	DO_LOGIN,
	// UPDATE_TABLE,
	GET_TABLE,
} from './types';

const baseURL = 'http://localhost:4000';
/*

export const doLogin = ( email, password ) => {
	return { type: DO_LOGIN, data: 'someLoginFunctionName' }
}

export const updateTable = ( teamIndex, seasonID  ) => {
	return { type: UPDATE_TABLE, data: 'someTableWithSeasonFetchFunction' }
}

*/

export const doLogin = ( emailAddress, password, stayLoggedIn ) => async dispatch => {
	const res = await axios.post(baseURL+'/auth/login', { 
		emailAddress, 
		password, 
		stayLoggedIn,
	});
	dispatch({ type: DO_LOGIN, payload: res.data.result });
}

export const getTable = ( teamIndex = 0, season = '' ) => async dispatch => {
	const res = await axios.get(baseURL+'/team/'+teamIndex+'/leaguetable/'+season);
	dispatch({ type: GET_TABLE, payload: res.data.result });
}
