import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../contacts/card/actions.js';


import ContactForm from './form/';

class Form extends Component {
	componentDidMount = async () => {
		// If Card/URL param is true....
		//await this.props.getContact("5a7cc728100dfb2e9f856aef");

		
	}
	submit = values => {
		// print the form values to the console
		console.log("values ",values)
	}
	render() {
		this.props.card && console.log("card", this.props.card)
		return(
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
{/*    <div>
        <button type="button" onClick={() =>{} }>Load Account</button>
      </div>*/}
						<ContactForm 
							onSubmit={this.submit} 
							contactCard={false}
							/>
					</div>
				</div>
			</div>
		)
	}
}



// NEW !!!!!!!!!!!!!!!
function mapStateToProps ({ contacts }) {
	let { card } = contacts;

	//let { load } = contacts;
	let { newComment } = contacts.comments;
	return { card, newComment };
}
export default connect(mapStateToProps,actions)(Form)