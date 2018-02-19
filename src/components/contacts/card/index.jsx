import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

import ContactForm from '../../crmform/form'
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
        console.log("values ",values);
        // Needs Action defined
        // Needs Action Creator & Reducer updated
        // Needs Upsert / Editing of a contact
    }
	
	buildContactCard = () => {
		//console.log("this.props ", this.props)
	  	return(
			<div className="container">			
				<div className="row">
				  	<div className="col-sm-12">
						<ContactForm 
							onSubmit={this.updateContact}
							isContactCard={this.isEditable}
							editable={false}
							/>
						<button 
                            type="button" 
                            className="btn btn-success mb-3" 
                            onClick={() => {
                                this.changeEditable();
                                this.props.editCard(this.isEditable)
                            }}>Load Account</button>
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