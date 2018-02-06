import axios from 'axios';
import {
	AUTH_FAILED,
	// UPDATE_TABLE,
	GET_TABLE,
} from './types';

export const getTable = ( teamIndex = 0, season = '' ) => async dispatch => {
	await axios.get('/team/'+teamIndex+'/leaguetable/'+season)
    .then( res => {
        dispatch({ type: GET_TABLE, payload: res.data.result });
    })
    .catch(err =>{
        dispatch({ type: AUTH_FAILED, payload: null });
        // redirect
        console.log(err.response);
		//console.log(err.data);
		//console.log(err.response.status);
    })
	
}
