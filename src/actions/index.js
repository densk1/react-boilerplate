import axios from 'axios';
import {
	DO_LOGIN,
	LOGIN_FAILED,
	// UPDATE_TABLE,
	GET_TABLE,
} from './types';

/*
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}*/

//const baseURL = 'http://localhost:4000';
/*

export const doLogin = ( email, password ) => {
	return { type: DO_LOGIN, data: 'someLoginFunctionName' }
}

export const updateTable = ( teamIndex, seasonID  ) => {
	return { type: UPDATE_TABLE, data: 'someTableWithSeasonFetchFunction' }
}

*/

export const doLogin = ( emailAddress, password, stayLoggedIn ) =>  dispatch => {
	axios.post('/auth/login', { 
		emailAddress, 
		password, 
		stayLoggedIn,
	}).then(res => {
		dispatch({ type: DO_LOGIN, payload: res.data.result });
	}).catch( 
		error => {
			dispatch({type: LOGIN_FAILED, payload: null });
			console.log(error.response);
			console.log(error.data);
			console.log(error.response.status);
		}
	);

	
}

export const getTable = ( teamIndex = 0, season = '' ) => async dispatch => {
	const res = await axios.get('/team/'+teamIndex+'/leaguetable/'+season);
	dispatch({ type: GET_TABLE, payload: res.data.result });
}
