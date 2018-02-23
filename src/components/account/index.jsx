import React, {Component} from 'react';

import AddUser from './addUser';
//import EditUser from './editUser';
import ChangePassword from './changePass';

class Account extends Component {
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <AddUser  /> 
                    </div>
                </div>
                {/*
				<div className="row">
                    <div className="col-sm-12">
                        <EditUser /> 
                    </div>
                </div>
				*/}
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



export default Account;