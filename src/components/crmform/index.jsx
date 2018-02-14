import React, { Component } from 'react';


/*
import { connect } from 'react-redux';
import * as actions from './actions';

*/
import FormTemplate from './form';

class Form extends Component {
	submit = values => {
		// print the form values to the console
		console.log(values)
	}

	render() {
		return(
			<div className="container">
				<div className="row">
					<FormTemplate />
				</div>
			</div>
        )
	}
}

export default Form;