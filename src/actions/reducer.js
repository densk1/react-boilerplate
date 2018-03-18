import {
  CHECK_LOGIN,
  CHECK_FAILED,
  DO_LOGIN,
  DO_LOGOUT,
  LOGIN_FAILED,
} from './types';

const reducer = (state = { onFail: null }, action = null) => {
  switch (action.type) {
    case CHECK_LOGIN:
      return {
        ...state,
        ...action.payload || false,
      };
    case DO_LOGIN:
      return {
        ...state,
        ...action.payload || false,
      };
    case DO_LOGOUT:
      return false;
    case CHECK_FAILED:
      return false;
    case LOGIN_FAILED:
      return {
        ...state,
        onFail: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
