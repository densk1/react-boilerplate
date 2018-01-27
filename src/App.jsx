import React, { Component } from 'react';
import {
	BrowserRouter, 
	Route, 
	Switch,
} from 'react-router-dom';

import Home from './scenes/Home/';
import Login from './scenes/Login';
import Table from './scenes/Leaguetable';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/table" component={Table}/>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;