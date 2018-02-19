import {
	ADD_COMMENT,
	GET_COMMENTS,
	NEW_COMMENT_TEXT,
    DELETE_COMMENT,
} from './types';

const reducerInitialState = {
	comments: '',
	newComment: ''
}

const reducer = ( state = reducerInitialState, action = null ) => {
	switch (action.type) {
		case ADD_COMMENT:
			let newComment = action.payload;
			return {
				...state,
				comments: [...newComment, ...state.comments]
			}
		case GET_COMMENTS:

			return {
				...state,
				comments: action.payload
			};
		case NEW_COMMENT_TEXT:
			let commentText = {
				...state,
				newComment: action.payload
			};
			return commentText;
        case DELETE_COMMENT: //update list
			return {
				...state,
				comments: action.payload
			};
		default:
			return state;
	}
}
export default reducer;