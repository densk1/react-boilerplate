import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from '../../actions/actions.js';

class Logout extends Component {
    render() {
        this.props.doLogout();
        console.log("doLogout");
        // {/**/}
        return <Redirect push to="/" />
    }
}



export default connect(null,actions)(Logout);