import {
  ADD_NEW_USER,
  CLEAR_NEW_USER,
} from './types';

const reducer = (state = false, action = null) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return action.payload && true;
    case CLEAR_NEW_USER:
      return false;
    default:
      return state;
  }
};
export default reducer;
