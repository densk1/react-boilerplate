import React, {Component} from 'react';
import { connect } from 'react-redux';

import AddUser from './addUser';
import EditUser from './editUser';
import ChangePassword from './changePass';
import ImportContacts from './import/';

class Account extends Component {
    render() {
        return(
            <div className="container-fluid">
				<div className="row m-0 p-0">
				{ this.props.admin &&
				<div className="col-md-6 col-12 p-0 m-0">
                    <div className="col-12 p-0 m-0">
                        <EditUser /> 
                    </div>
                    <div className="col-12 p-0 m-0">
                        <AddUser  /> 
                    </div>
                </div>
                }
                <div className="col-12 col-md-6 p-0 m-0">
                    <div className={!this.props.admin ? " col-12 p-0 m-0" : " col-12  p-0 m-0" }>
                        <ChangePassword  
							/> 
                    </div>
					<div className={!this.props.admin ? " col-12 p-0 m-0" : " col-12 p-0 m-0" }>
						<ImportContacts /> 
                    </div>
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