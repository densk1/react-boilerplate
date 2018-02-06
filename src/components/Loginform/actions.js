import axios from 'axios';
import {
	DO_LOGIN,
	LOGIN_FAILED,
    //AUTH_FAILED,
} from './types';


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
