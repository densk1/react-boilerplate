import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import ProtectedRoute from 'react-router-protected-route';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavBar from './components/Navbar';

import * as actions from './actions/actions';

import Login from './components/Loginform';
import Logout from './components/logout/';
import Form from './components/crmform';
import Contacts from './components/contacts/list/';
import ContactCard from './components/contacts/card/';
import Account from './components/account/';

const Footer = () => (
  <h1 className="success">&nbsp;</h1>
);

export class App extends Component {
  componentWillMount = () => {
    this.props.checkLogin();
  }

  render() {
    const { loggedIn } = this.props;
    const isAccessible = loggedIn && true;
    const myProtectedRoutes = [
      { component: Form, path: '/form', exact: true },
      { component: Contacts, path: '/contacts', exact: true },
      { component: ContactCard, path: '/contacts/card/:clientID', exact: true },
      { component: Account, path: '/account', exact: true },
    ];
    return (
      <BrowserRouter basename="/" >
        <div>
          <NavBar isLoggedIn={loggedIn} />
          <main>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/logout" component={Logout} />
              {myProtectedRoutes.map(d => (
                <ProtectedRoute
                  key={d.path}
                  isAccessible={isAccessible}
                  exact
                  redirectToPath="/account"
                  path={d.path}
                  component={d.component}
                />
                ))}
            </Switch>
          </main>
          <footer>
            <Switch>
              <Route path="/" component={Footer} />
            </Switch>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.instanceOf(Object).isRequired,
  checkLogin: PropTypes.func.isRequired,
};

function mapStateToProps({ loggedIn }) {
  return { loggedIn };
}
export default connect(mapStateToProps, actions)(App);

