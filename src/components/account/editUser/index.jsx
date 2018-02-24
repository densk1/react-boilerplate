import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import {AllHtmlEntities} from 'html-entities';

import MyModal from '../../modal';

class EditUser extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			modal: {
				body:null,
				callback:null,
				clear: null,
			}
		}
	}
	componentDidMount = () => {
		this.props.getUsers();	
	}
	handleUserUpdate = (_id, admin, firstName, secondName, index) => {
		let currentRole = this.props.editUser[index].admin;
		let verb = currentRole ? "Remove" : "Set";
		let body = verb+" "+AllHtmlEntities.decode(firstName+" "+secondName)+" as admin?";
		this.setState({
			modal: {
				body,
				callback: ()=> this.props.updateUser(_id, admin),
				clear: this.clearModal,
			}
		})
	}
	handleUserDelete = (_id, index, firstName, secondName) => {
		let body = "Permanently delete "+AllHtmlEntities.decode(firstName+" "+secondName)+"?";
		this.setState({
			modal: {
				body,
				callback:()=> { this.props.deleteUser(_id, index) },
				clear: this.clearModal,
			}
		})
	}
	clearModal = () => {this.setState({modal: false})}
    render() {
		const { editUser, email } = this.props;
        return(
            <div className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3">
				<MyModal
					{...this.state.modal}
					/>
                <h4 className="text-success text-center">Users</h4>
                <table className="col-sm-12 table">
                    <thead className="table-sm">
                        <tr>
                            <th className="w-50 pl-1">Name</th>
                            <th className="text-center">Admin</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="table-sm">
						{editUser && editUser.map( (d, index) => 
						<tr key={index}>
							<td className="align-middle">{AllHtmlEntities.decode(d.firstName+" "+d.secondName)}</td>
							<td className="text-center">
								<input 
									type="checkbox" 
									checked={d.admin} 
									disabled={email === d.email}
									onChange={(e) => this.handleUserUpdate(d._id, d.admin, d.firstName, d.secondName, index)} /></td>
							<td className="text-center">
								{!(email === d.email) && <button 
									className="btn-sm btn-outline-secondary"
									onClick={() => this.handleUserDelete(d._id, index, d.firstName, d.secondName)}
									>Remove</button>}</td>
						</tr>
						)}
                    </tbody>
                </table>
				
			</div>
        )
    }
}
function mapStateToProps ({ loggedIn, account }) {
    const { editUser } = account;
    const { email } = loggedIn;
	return { editUser, email };
}
export default connect(mapStateToProps,actions)(EditUser);
