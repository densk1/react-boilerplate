import React, { Component } from 'react';
import {
	BrowserRouter, 
	Route, 
	Switch,
} from 'react-router-dom';
import NavBar from './components/Navbar';
import axios from 'axios';

import { connect } from 'react-redux';
import * as actions from './actions/actions.js';

//import Home from './scenes/Home/';
import Login from './components/Loginform';
import Table from './scenes/Leaguetable';
import Form from './components/crmform';
import Contacts from './components/contacts';

const Home = () => (
    <h1 className="success">Home</h1>
)

const Footer = () => (
    <h1 className="success">&nbsp;</h1>
)


class App extends Component {

	componentDidMount = () => {
		this.props.checkLogin();
/*
// Used to test mongoDB connection.
        axios.get('/crm/list/2345', { 
		  emailAddress: 'password', 
		  password: 'password', 
		  stayLoggedIn: 'stayLoggedIn',
	   });
*/

	}
	render() {
		return (
            <BrowserRouter basename="/">
                <div>
                    <NavBar/>
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/form" component={Form}/>
                            <Route path="/contacts" component={Contacts}/>
                            <Route exact path="/team/:index(\d+)/leaguetable" component={Table}/>
                            <Route path="/team/:index(\d+)/leaguetable/:season(\d+)" component={Table}/>
                        </Switch>
                    </main>
                    <footer>
                        <Switch>
                            <Route path="/" component={Footer}/>
                        </Switch>
                    </footer>
                </div>
            </BrowserRouter>
		);
	}
}

function mapStateToProps ({ loggedIn }) {
	return { loggedIn };
}
	
export default connect(mapStateToProps,actions)(App);