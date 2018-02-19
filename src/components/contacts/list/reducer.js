import { 
	FIND_CONTACT, 
	GET_LIST 
} from './types.js';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case FIND_CONTACT:
            console.log(action.payload);
			return action.payload || false;
        case GET_LIST:
            
            return action.payload || false;
		default:
			return state;
	}
}
export default reducer;