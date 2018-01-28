import { combineReducers } from 'redux';
import tableReducer from '../scenes/Leaguetable/reducer';


export default combineReducers({
	table: tableReducer
});