import { combineReducers } from 'redux';

import ListReducer from './list/reducer';
import CardReducer from './card/reducer';
import CommentsReducer from './comments/reducer';
import CardIDReducer from '../crmform/reducer';

export default combineReducers({
  list: ListReducer,
  card: CardReducer,
  comments: CommentsReducer,
  cardID: CardIDReducer,
});
