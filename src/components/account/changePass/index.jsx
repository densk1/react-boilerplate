import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

import ChangePasswordForm from './form';

class ChangePassword extends Component {
	handleChangePassword = values => {
        const {
			changeUserPassword,
		} = this.props;
        changeUserPassword(values);
	}
    render() {
		const {
			changePass
		} = this.props;
        return(
				<ChangePasswordForm 
                    onSubmit={this.handleChangePassword} 
                    onSuccess={changePass.changeSuccess }
                    onPassError={changePass.changeFail}/> 
        )
    }
}
function mapStateToProps ({ account }) {
    const { changePass } = account;
	return { changePass };
}
export default connect(mapStateToProps,actions)(ChangePassword);