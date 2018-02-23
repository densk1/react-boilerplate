import {
	ADD_NEW_USER,
} from './types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case ADD_NEW_USER:
			return state;
		default:
			return state;
	}
}
export default reducer;