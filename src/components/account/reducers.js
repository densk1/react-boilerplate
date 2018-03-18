import { combineReducers } from 'redux';
import addUserReducer from './addUser/reducer';
import changePassReducer from './changePass/reducer';
import editUserReducer from './editUser/reducer';

export default combineReducers({
  addUser: addUserReducer,
  changePass: changePassReducer,
  editUser: editUserReducer,
});
