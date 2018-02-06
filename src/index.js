import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
//import logger from 'redux-logger';

//import '../public/css/index.css';
import App from './App.jsx';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	reducers, 						// => this is the list of reducers from the application
	{}, 							// INITIALSTATE of application => Most important when taking care of server side rendering
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
