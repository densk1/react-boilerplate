import axios from 'axios';
import { 
	CHECK_LOGIN,
	CHECK_FAILED,
} from './types.js';


export const checkLogin = () => dispatch => {
axios.get('/auth/checklogin', { 
	}).then(res => {
		console.log("Global is logged in.");
		dispatch({ type: CHECK_LOGIN, payload: res.data.result });
	}).catch( err => {
		console.log("Global NOT logged in.");
		dispatch({type: CHECK_FAILED, payload: null });
	});
}
