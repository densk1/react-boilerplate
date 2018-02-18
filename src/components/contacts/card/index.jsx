import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

import Comments from '../comments/';

// loading in data
import ContactForm from '../../crmform/form'


class App extends Component {
	componentDidMount = async () => {
		let { clientID } = this.props.match.params;
		await this.props.getContact( clientID );
	}

	addComment = (e) => {
		e.preventDefault();
		let { clientID } = this.props.match.params;
		let comment = this.props.newComment;
		if (comment.length > 1 ) {
			this.props.addNewComment( clientID, comment );
			this.props.newCommentText('');
		}
	}
	
	isEditable = false;
	changeEditable = () => {
		if (this.isEditable ) {
			this.isEditable = false;
		} else {
			this.isEditable = true;
		}
	}

	
	buildContactCard = () => {
		console.log("this.props.cardEdit ", this.props.cardEdit)
	  	return(
			<div className="container">			
				<div className="row">
				  	<div className="col-sm-12">
						<ContactForm 
							onSubmit={this.submit}
							isContactCard
							editable={true}
							/>
						<button type="button" className="btn btn-success mb-3" onClick={() => {
									this.changeEditable();
									this.props.editCard(this.isEditable)
						}}>
					Load Account</button>
						</div>


  					<div className="col-md-12">
						<div className="card mb-4">
							
							<div className="card-body">
								<div className="form-group">
									<form >
									<textarea 
									className="form-control"
									onChange={(e)=> { this.props.newCommentText(e.target.value) }}
									onKeyPress={ (e)=> e.key === 'Enter' && this.addComment(e) }
									placeholder="Add a note..."
									value={ this.props.newComment }
									
									></textarea>
									</form>
								</div>
								<button 
									className="btn btn-sm btn-success" 
									onClick={ (e)=>this.addComment(e) }
									>Add Note</button>
							</div>
						</div>
						<Comments clientID={ this.props.match.params.clientID }/>
					</div>
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
	let { card, cardEdit } = contacts;
	let { newComment } = contacts.comments;
	return { card, newComment, cardEdit };
}
	
export default connect(mapStateToProps,actions)(App);