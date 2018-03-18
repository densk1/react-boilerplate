import {
  ADD_COMMENT,
  GET_COMMENTS,
  NEW_COMMENT_TEXT,
  DELETE_COMMENT,
} from './types';

const reducerInitialState = {
  comments: '',
  newComment: '',
};

const reducer = (state = reducerInitialState, action = null) => {
  switch (action.type) {
    case ADD_COMMENT:
      const newComment = action.payload;
      return {
        ...state,
        comments: [...newComment, ...state.comments],
      };
    case GET_COMMENTS:

      return {
        ...state,
        comments: action.payload,
      };
    case NEW_COMMENT_TEXT:
      return {
        ...state,
        newComment: action.payload,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
