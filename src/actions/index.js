import axios from 'axios';
import {
	// DO_LOGIN,
	// UPDATE_TABLE,
	GET_TABLE,
} from './types';
/*

export const doLogin = ( email, password ) => {
	return { type: DO_LOGIN, data: 'someLoginFunctionName' }
}

export const updateTable = ( teamIndex, seasonID  ) => {
	return { type: UPDATE_TABLE, data: 'someTableWithSeasonFetchFunction' }
}

*/



export const getTable = ( teamIndex = 0, season = '' ) => async dispatch => {
	const res = await axios.get('http://do:3000/team/'+teamIndex+'/leaguetable/'+season)
	dispatch({ type: GET_TABLE, payload: res.data.result });
}
