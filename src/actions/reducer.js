import {
  CHECK_LOGIN,
  CHECK_FAILED,
  DO_LOGIN,
  DO_LOGOUT,
  LOGIN_FAILED,
} from './types';

const reducer = (
  state = {
    admin: false,
    firstName: '',
    secondName: '',
    email: '',
  },
  action = null,
) => {
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
      return {};
    case CHECK_FAILED:
      return {};
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
