import { combineReducers } from 'redux';
import globalReducer from '../actions/reducer.js';
import tableReducer from '../scenes/Leaguetable/reducer';
import loginReducer from '../components/Loginform/reducer';


export default combineReducers({
	loggedIn: 		globalReducer,
	table: 			tableReducer,
	loginResult: 	loginReducer
});