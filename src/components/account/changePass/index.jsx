import React, {Component} from 'react';

import ChangePasswordForm from './form';

class ChangePassword extends Component {
	handleAddUser = values => {
		console.warn("handleAddUser ");
		console.log({values});
	}
	
    render() {
        return(
				<ChangePasswordForm onSubmit={this.handleAddUser} /> 
        )
    }
}



export default ChangePassword;