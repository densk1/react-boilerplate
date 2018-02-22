import React, { Component } from 'react';
import {
	BrowserRouter,
	Route, 
	Switch,
    //Redirect,
} from 'react-router-dom';
import ProtectedRoute from "react-router-protected-route";
import NavBar from './components/Navbar';

import { connect } from 'react-redux';
import * as actions from './actions/actions.js';


//import Home from './scenes/Home/';
import Login from './components/Loginform';

import Form from './components/crmform';
import Contacts from './components/contacts/list/';
import ContactCard from './components/contacts/card/';
import Logout from './components/logout'

const Footer = () => (
    <h1 className="success">&nbsp;</h1>
)

class App extends Component {
	componentWillMount = async () => {
		await this.props.checkLogin();
	}
    
	render() {
        const { loggedIn} = this.props;
        const myProtectedRoutes = [
            {component: Form, path: "/form", exact: true },
            {component: Contacts, path: "/contacts", exact: true },
            {component: ContactCard, path: "/contacts/card/:clientID", exact: true },
        ]
		return (
            <BrowserRouter basename="/" >
                <div>
                    <NavBar isLoggedIn={loggedIn} />
                    <main>
                        <Switch>
                            <Route exact path="/" component={Login}/>
                            <Route exact path="/logout" component={Logout   }/>
                            {myProtectedRoutes.map( 
                                (d, i) => 
                                <ProtectedRoute
                                    key={i}
                                    isAccessible={ loggedIn ? true : false }
                                    exact
                                    redirectToPath={"/"}
                                    path={d.path}
                                    component={d.component}
                                    />
                            )}
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