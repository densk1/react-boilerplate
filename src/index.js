import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
//import logger from 'redux-logger';

import App from './App.jsx';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	reducers, 
    {}, 
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store={store}>
            <App />
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
