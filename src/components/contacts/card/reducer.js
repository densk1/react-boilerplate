import {
	GET_CONTACT,
	CLEAR_CARD,
} from './types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case GET_CONTACT:
			return action.payload || false;
		case CLEAR_CARD:
			return false;
		default:
			return state;
	}
}
export default reducer;