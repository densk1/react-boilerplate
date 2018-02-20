import React, { Component } from 'react';
import {
	BrowserRouter,
	Route, 
	Switch,
    Redirect,
} from 'react-router-dom';

class EnsureLoggedIn extends React.Component {
  componentDidMount() {
    const { dispatch, currentURL, loggedIn, loginResult } = this.props

    if (!loggedIn || !loggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      dispatch(setRedirectUrl(currentURL))
      browserHistory.replace("/login")
    }
  }

  render() {
    if (isLoggedIn) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps({ loggedIn, loginResult }) {
  return {
    loggedIn,
    loginResult,
    currentURL: ownProps.location.pathname,
  }
}

export default connect(mapStateToProps)(EnsureLoggedIn)