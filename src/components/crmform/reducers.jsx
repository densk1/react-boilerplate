import {
	ADD_NEW_CONTACT,
	LOAD_TO_FORM,
	EDIT_CARD,
} from './types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case ADD_NEW_CONTACT:
			return { ...state, action.payload };
		default:
			return state;
	}
}
export default reducer;