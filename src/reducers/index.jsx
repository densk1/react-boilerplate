import { combineReducers } from 'redux';
import globalReducer from '../actions/reducer.js';
import tableReducer from '../scenes/Leaguetable/reducer';
import contactsReducer from '../components/contacts/reducer';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
	loggedIn: 		globalReducer,
	table: 			tableReducer,
	contacts: 		contactsReducer,
    form:           formReducer,
});