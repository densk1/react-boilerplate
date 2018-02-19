import {
	ADD_NEW_CONTACT,
	LOAD_TO_FORM,
	EDIT_CARD,
} from './types';

const reducer = ( state = null, action = null ) => {
	console.log(state, action);
	switch (action.type) {
		case ADD_NEW_CONTACT:
			return { ...state, action.payload };
		default:
			return state;
	}
}
export default reducer;