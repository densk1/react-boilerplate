import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddUser from './addUser';
import EditUser from './editUser';
import ChangePassword from './changePass';

class Account extends Component {
    render() {
        return(
            <div className="container">
				{ this.props.admin &&
				<div>
				<div className="row">
                    <div className="col-sm-12">
                        <EditUser /> 
                    </div>
                </div>
				<div className="row">
                    <div className="col-sm-12">
                        <AddUser  /> 
                    </div>
                </div>
                </div>
                }
                <div className="row">
                    <div className="col-sm-12">
                        <ChangePassword  
							/> 
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps ({ loggedIn }) {
    const { admin } = loggedIn;
	return { admin };
}
export default connect(mapStateToProps,null)(Account);