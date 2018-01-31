import { combineReducers } from 'redux';
import tableReducer from '../scenes/Leaguetable/reducer';
import loginReducer from '../components/Loginform/reducer';


export default combineReducers({
	table: tableReducer,
	loginResult: loginReducer
});