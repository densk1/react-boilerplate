import React, { Component } from 'react';

import NewContactForm from './form';

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
					<NewContactForm onSubmit={this.submit} />
                    </div>
				</div>
			</div>
        )
	}
}

export default Form;

/*
<input 
    type="text" 
    readonly 
    disabled 
    className="form-control-plaintext" 
    id="staticEmail" 
    value="email@example.com"
/>
*/