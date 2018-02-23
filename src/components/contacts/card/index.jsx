import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import { Link } from 'react-router-dom';


import ContactForm from '../../form'
import Comments from '../comments/';

class App extends Component {
	componentDidMount = async () => {
		const { clientID } = this.props.match.params;
		await this.props.getContact( clientID );
    }
    isEditable = !false;
	changeEditable = () => {
		if (this.isEditable ) {
			this.isEditable = false;
		} else {
			this.isEditable = true;
		}
	}
    updateContact = (values) => {
        this.props.updateContact(values);
    }
	retEditButton = () => {
		return (
			<button 
				type="button" 
				className="btn btn-success mt-3 mb-2" 
				onClick={() => {
					this.changeEditable();
					this.props.editCard(this.isEditable)
				}}>Edit Contact</button>
		)
	}
	retDeleteButton = () => {
		const { clientID } = this.props.match.params;
		return (
			<Link to={"/contacts"}><button 
				type="button" 
				className="btn btn-outline-danger mt-3 mb-2" 
				onClick={() => {
					this.props.deleteContact(clientID);
					this.props.clearCard();

				}}>Delete</button></Link>
		)
	}
	
	buildContactCard = () => {
		const { clientID } = this.props.match.params;
	  	return(
			<div className="container-fluid">			
				<div className="row">
				  	<div className=" col-sm-12">
						<ContactForm 
							onSubmit={this.updateContact}
							isContactCard={this.isEditable}
							editable={true}
                            showPlaceholder={!this.isEditable}
							deleteContact={this.props.deleteContact}
							contactID={clientID}
							buttons={[this.retEditButton(), this.retDeleteButton()]}
							/>
						
						</div>
                    <Comments />
				</div>
			</div>
		)
	}
	render(){
		return this.props.card && this.buildContactCard();
	}
    componentWillUnmount = () => {
		this.props.clearCard();
    }
}

function mapStateToProps ({ contacts }) {
	let { card } = contacts;
	let { newComment } = contacts.comments;
	return { card, newComment };
}
	
export default connect(mapStateToProps,actions)(App);