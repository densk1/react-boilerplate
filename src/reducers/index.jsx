import { combineReducers } from 'redux';
import globalReducer from '../actions/reducer.js';
import tableReducer from '../scenes/Leaguetable/reducer';
import accountReducer from '../components/account/reducers';

import contactsReducer from '../components/contacts/reducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
	loggedIn: 		globalReducer,
    account:        accountReducer,
	table: 			tableReducer,
	contacts: 		contactsReducer,
    form:           formReducer,
});