import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Redirect } from 'react-router-dom';

import ContactForm from '../form/';

class Form extends Component {
	submit = values => {
		// print the form values to the console
		this.props.addNewContact({values});
		//console.log("values ",values)
	}
	componentWillUnmount = () => {
		this.props.clearContactID();
	}
	render() {
		const { cardID } = this.props;
		return(
			<div className="container">
				{ 	cardID && 
					<Redirect push to={"/contacts/card/"+cardID} />}
				<div className="row">
					<div className="col-sm-12">
						<ContactForm 
							onSubmit={this.submit} 
							showPlaceholder
							/>
						
					</div>
				</div>
			</div>
		)
	}
}


function mapStateToProps ({ contacts }) {
	let { cardID } = contacts;
	return { cardID };
}
export default connect(mapStateToProps,actions)(Form)