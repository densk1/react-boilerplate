import { GET_TABLE } from '../../actions/types';

const reducer = ( state = null, action ) => {
	switch (action.type) {
		case GET_TABLE:
			return action.payload || false;
		default:
			return state;
	}
}
export default reducer;

