import {
	GET_CONTACT,
	CLEAR_CARD,
	EDIT_CARD
} from './types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case GET_CONTACT:

			return action.payload || false;
		case CLEAR_CARD:
			return false;
		case EDIT_CARD:
			
				console.log("EDIT_CARD: ", state)
			return {
				...state,
				cardEdit: action.payload	
			};
		default:
			return state;
	}
	
}
export default reducer;