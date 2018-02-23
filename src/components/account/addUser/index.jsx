import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

import AddUserForm from './form';



class AddUser extends Component {
	handleAddUser = values => {
		console.warn("handleAddUser ");
		console.log({values});
	}
	
    render() {
		const {
			addNewUser
		} = this.props;
        return(
			<div>
				<AddUserForm onSubmit={addNewUser} /> 
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

function mapStateToProps ({ addUser }) {

	return { addUser };
}
export default connect(mapStateToProps,actions)(AddUser);