import { 
	CHECK_LOGIN, CHECK_FAILED 
} from './types.js';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case CHECK_LOGIN:
			return action.payload || false;
		case CHECK_FAILED:
			return false;
		default:
			return state;
	}
}
export default reducer;