import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

import Comments from './comments/';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			newComment : ''
		};
	}
	componentDidMount = () => {
		let { clientID } = this.props.match.params;
		this.props.getContact( clientID );
	}

	addComment = () => {
		let { clientID } = this.props.match.params;
		let comment = this.state.newComment;
		if (this.state.newComment.length > 1 ) {
			this.props.addNewComment( clientID, comment );
			this.setState({ newComment: '' });
		}
	}
	buildContactCard = () => {
		let card = this.props.contacts.card;
		return(
			<div className="container">			
				<div className="row">
					<div className="col-md-6 mb-4">
						<div className="card">
							<div className="card-body">
								<h6 className="card-subtitle mb-2 text-muted">Name</h6>
								<h5 className="card-title">{card.name}</h5>

								<h6 className="card-subtitle mb-2 text-muted">Email</h6>
								<h5 className="card-title">{card.email}</h5>

								<h6 className="card-subtitle mb-2 text-muted">Company</h6>
								<h5 className="card-title">{card.company}</h5>
								<p className="card-text"><small className="text-muted">Last updated ...</small></p>
							</div>
						</div>

					</div>
					<div className="col-md-12">
						<div className="card mb-4">
							
							<div className="card-body">
								<div className="form-group">
									<form >
									<textarea 
									className="form-control"
									onChange={(e)=>this.setState({newComment: e.target.value})}
									onKeyPress={(e)=> e.key === 'Enter' && this.addComment()}
									placeholder="Add a note..."
									value={this.state.newComment}
									></textarea>
									</form>
								</div>
								<button className="btn btn-sm btn-success" onClick={()=>this.addComment()}>Add Note</button>
							</div>
						</div>
						<Comments clientID={this.props.match.params.clientID}/>
					</div>
				</div>
			</div>

		)
	}
	render(){
		return this.props.contacts.card && this.buildContactCard()
	}
}

function mapStateToProps ({ contacts }) {
	return { contacts };
}
	
export default connect(mapStateToProps,actions)(App);

