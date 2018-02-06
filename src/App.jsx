import React, { Component } from 'react';
import {
	BrowserRouter, 
	Route, 
	Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './actions/actions.js';

import Home from './scenes/Home/';
import Login from './scenes/Login';
import Table from './scenes/Leaguetable';


class App extends Component {
	componentDidMount = () => {
		this.props.checkLogin();
	}
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

function mapStateToProps ({ checkLogin }) {
	return { checkLogin };
}
	
export default connect(mapStateToProps,actions)(App);