import axios from 'axios';
import {
	DO_LOGIN,
	LOGIN_FAILED,
    AUTH_FAILED,
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
		err => {
			dispatch({type: LOGIN_FAILED, payload: null });
			//console.log(err.response, err.data, err.response.status);
		}
	);

	
}

export const getTable = ( teamIndex = 0, season = '' ) => async dispatch => {
	await axios.get('/team/'+teamIndex+'/leaguetable/'+season)
    .then( res => {
        dispatch({ type: GET_TABLE, payload: res.data.result });
    })
    .catch(err =>{
        dispatch({ type: AUTH_FAILED, payload: null });
        // redirect
        console.log(err.response);
		console.log(err.data);
		console.log(err.response.status);
    })
	
}
