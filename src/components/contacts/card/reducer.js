import {
  GET_CONTACT,
  CLEAR_CARD,
  EDIT_CARD,
  UPDATE_CARD,
  DELETE_CONTACT,
} from './types';

const reducer = (state = null, action = null) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        ...action.payload || false,
      };
    case CLEAR_CARD:
      return false;
    case EDIT_CARD:
      return {
        ...state,
        cardEdit: action.payload,
      };

    case UPDATE_CARD:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_CONTACT:
      return state;
    default:
      return state;
  }
};
export default reducer;
