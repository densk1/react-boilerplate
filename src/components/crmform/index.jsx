import React, { Component } from 'react';

import ContactForm from './form/';

class Form extends Component {
	submit = values => {
		// print the form values to the console
		console.log(values)
	}
	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<ContactForm onSubmit={this.submit} />
					</div>
				</div>
			</div>
		)
	}
}
export default Form;
