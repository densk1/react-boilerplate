import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';


import ContactForm from '../form/';

class Form extends Component {
	submit = values => {
		// print the form values to the console
		this.props.addNewContact({values});
		//console.log("values ",values)
	}
	render() {
		return(
			<div className="container">
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



// NEW !!!!!!!!!!!!!!!
/*function mapStateToProps ({ }) {

	return { };
}*/
export default connect(null,actions)(Form)