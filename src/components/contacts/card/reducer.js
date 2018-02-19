import {
	GET_CONTACT,
	CLEAR_CARD,
	EDIT_CARD
} from './types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case GET_CONTACT:

			return { ...state,
                ...action.payload || false
            };
		case CLEAR_CARD:
			return false;
		case EDIT_CARD:
            let editPayload = {
				...state,
				cardEdit: action.payload
			}
            console.log("Edit payload", editPayload);
			return editPayload;
		default:
			return state;
	}
	
}
export default reducer;