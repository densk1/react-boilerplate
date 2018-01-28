import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
//import logger from 'redux-logger';

import './index.css';
import App from './App.jsx';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	reducers, 			// => this is the list of reducers from the application
	{}, 				// INITIALSTATE of application => Most important when taking care of server side rendering
	applyMiddleware(reduxThunk) 	// Will add in redux-thunk at a later stage
);



ReactDOM.render(
	<Provider
		store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();


// redux
/*
=> S7 L63
1. Setup the store here
2. Also rendering a provider tag here. 
it's provided to us by the react-redux library => makes store accessible to every component in the App

Any component can use the provider tag to reach into the store and pull out a specific piece of state.
Q: What does redux thunk do?

=> S7 L64

1. Create the reducer Decided if user is logged in or not.

*/
 