import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';


import ContactForm from './form/';

class Form extends Component {
	componentDidMount = async () => {
		// If Card/URL param is true....
		// await this.props.getContact("5a7cc728100dfb2e9f856aef");

		
	}
	submit = values => {
		// print the form values to the console
		this.props.addNewContact({values});
		console.log("values ",values)
	}
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<ContactForm 
							onSubmit={this.submit} 
							isContactCard={true}

							showPlaceholder={false}
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