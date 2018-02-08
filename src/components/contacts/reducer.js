import { FIND_CONTACT } from './types.js';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case FIND_CONTACT:
			return action.payload || false;
		default:
			return state;
	}
}
export default reducer;


