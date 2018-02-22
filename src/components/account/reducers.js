//combine reducers crm
import { combineReducers } from 'redux';

import addUserReducer from './addUser/reducer';
import changePassReducer from './changePass/reducer';
import editUsersReducer from './editUsers/reducer';

export default combineReducers({
	addUser:		addUserReducer,
	changePass:		changePassReducer,
	editUsers:	    editUsersReducer,
});

console.warn(" ACCOUNT REDUCER  |  NOT YET EXPORTED TO PARENT REDUCER");