import {
	GET_CONTACT,
} from './types';

const reducer = ( state = null, action = null ) => {
	console.log(action.payload);
	switch (action.type) {
		case GET_CONTACT:
			return action.payload || false;
		default:
			return state;
	}
}
export default reducer;