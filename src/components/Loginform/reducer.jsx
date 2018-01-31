import { DO_LOGIN } from '../../actions/types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case DO_LOGIN:
			return action.payload || false;
		default:
			return state;
	}
}
export default reducer;


