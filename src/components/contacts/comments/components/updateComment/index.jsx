


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js';



class UpdateComment extends Component {
	addComment = (e) => {
		e.preventDefault();
        let comment = this.props.newComment;
		const { firstName, secondName } = this.props;
		if (comment.length > 1 ) {
			this.props.addNewComment( this.props.clientID, comment, firstName+" "+secondName );
			this.props.newCommentText('');
		}
	}
	
	render() {
		return (
            <div className="row">
                <div className="offset-sm-1 col-sm-10">
                    <div className="card mb-4">
                        <div className="card-body  pb-0">
                            <div className="form-group mb-0">
                                <form onSubmit={(e)=> {
									this.updateComment(e) 
									}}>
                                <textarea 
                                className="form-control"
                                onChange={(e)=> { this.props.updatedCommentText(e.target.value) }}

                                placeholder="Add a note..."
                                value={ this.props.commentText }

                                ></textarea>
                                <div className="form-group mt-3 pb-0">
                                <button 
                                    className="btn btn-sm btn-success mb-0"
                                    >Add Note</button>
                                </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
	}
}

function mapStateToProps ({ contacts, loggedIn }) {
	let { firstName, secondName } = loggedIn;
    let clientID = contacts.card._id;
    let { newComment } = contacts.comments
	return { contacts, clientID, newComment, firstName, secondName };
}
	
export default connect(mapStateToProps,actions)(UpdateComment);

