import { combineReducers } from 'redux';
import globalReducer from '../actions/reducer.js';
import tableReducer from '../scenes/Leaguetable/reducer';
import loginReducer from '../components/Loginform/reducer';
import contactsReducer from '../components/contacts/reducer';



export default combineReducers({
	loggedIn: 		globalReducer,
	table: 			tableReducer,
	loginResult: 	loginReducer,
	contacts: 		contactsReducer,
	//contactList:    contactReducer,
	//contactCard:	contactCardReducer
});