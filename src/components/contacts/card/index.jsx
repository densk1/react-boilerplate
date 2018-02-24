import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

import MyModal from '../../modal';

import ContactForm from '../../form'
import Comments from '../comments/';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			modal: {
				body:null,
				callback:null,
				clear: this.clearModal,
			}
		}
	}
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
/*	retEditButton = () => {
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
	*/
	retEditButton = () => {
		this.changeEditable();
		this.props.editCard(this.isEditable)
	}
	
	
	retDeleteButton = () => {
		return this.handleCardDelete();
	}
	handleCardDelete = () => {
		const { clientID } = this.props.match.params;
		let body = "Permanently delete this entry?";
		this.setState({
			modal: {
				body: body,
				callback:()=> { 
					this.props.deleteContact(clientID);
					this.props.history.push("/contacts");
				},
				clear: this.clearModal,
			}
		})
	}
	
	clearModal = () => {this.setState({modal: false})}

	buildContactCard = () => {
		const { clientID } = this.props.match.params;
	  	return(
			<div className="container-fluid">	
				<MyModal
					{...this.state.modal}
					/>
				<div className="row">
				  	<div className=" col-sm-12">
						<ContactForm 
							onSubmit={this.updateContact}
							isContactCard={this.isEditable}
							editable={true}
                            showPlaceholder={!this.isEditable}
							contactID={clientID}
							buttons={[this.retEditButton, this.retDeleteButton]}
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