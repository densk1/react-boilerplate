import {
	ADD_COMMENT,
	GET_COMMENTS,
	NEW_COMMENT_TEXT
} from './types';

const reducerInitialState = {
	comments: null,
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
			let comments = action.payload;
			return {
				...state,
				comments
			};
		case NEW_COMMENT_TEXT:
			let commentText = {
				...state,
				newComment: action.payload
			};
			return commentText;
		default:
			return state;
	}
}
export default reducer;