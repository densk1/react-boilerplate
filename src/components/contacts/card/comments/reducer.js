import {
	ADD_COMMENT_FAILED,
	ADD_COMMENT,
	GET_COMMENTS,
} from './types';

const reducer = ( state = null, action = null ) => {
	switch (action.type) {
		case ADD_COMMENT:
			console.log("Comments Current State: ", state)
			let { payload } = action;
			let update = [
				...state,
				...payload
			];
			
			console.log('update: ', update);
			return [
				...payload,
				...state
			];
		case ADD_COMMENT_FAILED:
			return null;
		case GET_COMMENTS:
			return action.payload;
		default:
			return state;
	}
}
export default reducer;