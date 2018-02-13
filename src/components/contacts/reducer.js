//combine reducers crm
import { combineReducers } from 'redux';

import ListReducer from './list/reducer';
import CardReducer from './card/reducer';
import CommentsReducer from './comments/reducer';

export default combineReducers({
	list:		ListReducer,
	card:		CardReducer,
	comments:	CommentsReducer,
});

