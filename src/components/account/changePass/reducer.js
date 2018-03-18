import {
  CHANGE_PASSWORD,
  CLEAR_CHANGE_PASSWORD,
  PW_CHANGE_FAIL,
} from './types';

const reducer = (state = { changeSuccess: null, changeFail: null }, action = null) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return {
        ...state,
        changeSuccess: action.payload,
      };
    case PW_CHANGE_FAIL:

      return {
        ...state,
        changeFail: action.payload,
      };
    case CLEAR_CHANGE_PASSWORD:
      return {
        changeSuccess: action.payload,
        changeFail: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
