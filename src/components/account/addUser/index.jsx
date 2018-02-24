import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

import AddUserForm from './form';

class AddUser extends Component {

	addUserHandler = values => {
		const {
			addNewUser,
			
		} = this.props;
		addNewUser(values);
		
    }
    
    render() {
		const {
			addUser
		} = this.props;
        return(
			<div>
				<AddUserForm onSubmit={this.addUserHandler} onSuccess={addUser} /> 
                {/*
				<div className="row">
                    <div className="col-sm-12">
                        <EditUser /> 
                    </div>
                </div>
				
                <div className="row">
                    <div className="col-sm-12">
                        <ChangePassword 
							onSubmit={this.handleChangePassword} 
							/> 
                    </div>
                </div>
				*/}
            </div>
        )
    }
}

function mapStateToProps ({ account }) {
    const { addUser } = account;
	return { addUser };
}
export default connect(mapStateToProps,actions)(AddUser);