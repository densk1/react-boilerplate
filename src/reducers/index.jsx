import { combineReducers } from 'redux';
import globalReducer from '../actions/reducer.js';
import accountReducer from '../components/account/reducers';
import contactsReducer from '../components/contacts/reducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	loggedIn: 		globalReducer,
    account:        accountReducer,
	contacts: 		contactsReducer,
    form:           formReducer,
});