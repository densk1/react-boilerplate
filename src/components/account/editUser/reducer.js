import {
  GET_USERS,
  UPDATE_USER,
  DELETE_USER,
} from './types';


const removeItemFromArray = (array, index) => array.filter((item, i) => i !== index);

const reducer = (state = [], action = null) => {
  switch (action.type) {
    case GET_USERS:

      return [
        ...action.payload.result,
      ];
    case UPDATE_USER:
      return state.map((data, i) => {
        if (i !== state.findIndex(e => e._id === action.payload._id)) {
          return data;
        }
        return {
          ...data,
          ...action.payload,
        };
      });
    case DELETE_USER:
      return removeItemFromArray(state, action.payload.index);
    default:
      return state;
  }
};
export default reducer;
