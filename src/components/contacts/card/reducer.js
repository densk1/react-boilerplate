import {
	GET_CONTACT,
	CLEAR_CARD,
	LOAD_TO_FORM,
} from './types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case GET_CONTACT:
			return action.payload || false;
		case CLEAR_CARD:
			return false;
 		case LOAD_TO_FORM:
			return {
				data: action.data
			}
		default:
			return state;
	}
}
export default reducer;