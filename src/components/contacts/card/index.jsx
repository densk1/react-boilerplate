import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

//import Comments from '../comments/';
import Card255 from './fields/contactView255.jsx';
import Card273 from './fields/contactView273.jsx';
import Card210 from './fields/contactView210.jsx';


// loading in data



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
	
	
	buildContactCard = () => {
		const card = this.props.card;
	  	return(
			<div className="container">			
				<div className="row">
				  	<div className="col-sm-12">
					  
					 {/* Start Card */}
						<form id="contactCard" className="card card-body col-xs-12 offset-sm-1 col-sm-12 offset-md-1 col-md-10">


							
							
							  	<Card255 label="Name" data1={card.name} data2={''} />
							  	<Card210 label="Email" data1={card.email} data2={''} />
							  	<Card255 label="Company" data1={card.company} data2={"Producer"} />
							  	<hr />
							  	<Card273 label="Phone" data1={'01 708 8147'} data2={'147'} />
							  	<Card255 label="" data1={"01 7088 147"} data2={"086 770 1331"} extraClass={"col-6"}/>
						  		<hr />
							  	<Card210 label="Address" data1={"22 Fitzwilliam Street Upper"} />
							  	<Card210 label="" data1={"Dublin 2"}  />
							  	<Card210 label="" data1={"Dublin"}  />
							  	<Card210 label="" data1={"D02 WR82"}  />
						  		<hr />
						  		Edit Button
						  	</form>
					  {/* End Card */}

						</div>

{/* Comments Section ****
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
					</div>*/}
				</div>
			</div>

		)
	}
	render(){
		return this.props.card && this.buildContactCard();
	}
    componentWillUnmount = () => {
				//this.props.clearCard();
    }
}

function mapStateToProps ({ contacts }) {
	let { card } = contacts;
	let { newComment } = contacts.comments;
	return { card, newComment };
}
	
export default connect(mapStateToProps,actions)(App);

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