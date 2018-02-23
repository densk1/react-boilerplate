import {
	ADD_NEW_USER,
    CLEAR_NEW_USER,
} from './types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case ADD_NEW_USER:
			return {...state, ...action.payload};
        case CLEAR_NEW_USER:
			return action.payload;
		default:
			return state;
	}
}
export default reducer;