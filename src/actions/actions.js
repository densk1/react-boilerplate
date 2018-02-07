import axios from 'axios';
import { 
	CHECK_LOGIN,
	CHECK_FAILED,
} from './types.js';


export const checkLogin = () => dispatch => {
axios.post('/auth/checklogin', { 
	}).then(res => {
		dispatch({ type: CHECK_LOGIN, payload: res.data.result });
	}).catch( err => {
		dispatch({type: CHECK_FAILED, payload: null });
	});
}
