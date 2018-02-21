import { 
	CHECK_LOGIN, 
    CHECK_FAILED,
    DO_LOGIN,
    DO_LOGOUT,
    LOGIN_FAILED
} from './types.js';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case CHECK_LOGIN:
			return action.payload || false;
		case DO_LOGIN:
			return action.payload || false;
		case DO_LOGOUT:
			return false;
        case CHECK_FAILED:
			return false;
		case LOGIN_FAILED:
			return false;
		default:
			return state;
	}
}
export default reducer;