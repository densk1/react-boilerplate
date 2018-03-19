import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import globalReducer from '../actions/reducer';
import accountReducer from '../components/account/reducers';
import contactsReducer from '../components/contacts/reducer';

export default combineReducers({
  loggedIn: globalReducer,
  account: accountReducer,
  contacts: contactsReducer,
  form: formReducer,
});
