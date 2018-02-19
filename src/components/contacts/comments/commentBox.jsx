


import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';



class CommentBox extends Component {
	addComment = (e) => {
		e.preventDefault();
		console.log(this.props.clientID);
        let comment = this.props.newComment;
		if (comment.length > 1 ) {
			this.props.addNewComment( this.props.clientID, comment );
			this.props.newCommentText('');
		}
	}
	
	render() {
		return (
            <div className="row ">
            <div className="offset-sm-1 col-sm-10">
                <div className="card mb-4">

                    <div className="card-body">
                        <div className="form-group">
                            <form onSubmit={ (e)=>this.addComment(e) }>
                            <textarea 
                            className="form-control"
                            onChange={(e)=> { this.props.newCommentText(e.target.value) }}

                            placeholder="Add a note..."
                            value={ this.props.newComment }

                            ></textarea>
                            <div className="form-group mt-3 pb-0">
                            <button 
                                className="btn btn-sm btn-success mb-0"
                                //onClick={ (e)=>this.addComment(e) }
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

function mapStateToProps ({ contacts }) {
    let clientID = contacts.card._id;
    let { newComment } = contacts.comments
	return { contacts, clientID, newComment };
}
	
export default connect(mapStateToProps,actions)(CommentBox);

