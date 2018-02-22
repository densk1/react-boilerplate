
import {
	ADD_NEW_CONTACT,
	CLEAR_NEW_CONTACT_ID,
	//LOAD_TO_FORM,
	//EDIT_CARD,
} from './types';

const reducer = ( state = null, action = null ) => {

	switch (action.type) {
		case ADD_NEW_CONTACT:
			let newID = action.payload;
			return newID;
		case CLEAR_NEW_CONTACT_ID:
			return action.payload;
		default:
			return state;
	}
}
export default reducer;