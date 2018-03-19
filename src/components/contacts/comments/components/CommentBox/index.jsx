import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

class CommentBox extends Component {
  addComment = (e) => {
    e.preventDefault();
    const comment = this.props.newComment;
    const { firstName, secondName } = this.props;
    if (comment.length > 1) {
      this.props.addNewComment(this.props.clientID, comment, `${firstName} ${secondName}`);
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
                <form onSubmit={e => this.addComment(e)}>
                  <textarea
                    className="form-control"
                    onChange={e => this.props.newCommentText(e.target.value)}
                    placeholder="Add a note..."
                    value={this.props.newComment}
                  />
                  <div className="form-group mt-3 pb-0">
                    <button
                      className="btn btn-sm btn-success mb-0"
                    >Add Note
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CommentBox.propTypes = {
  newComment: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  secondName: PropTypes.string.isRequired,
  clientID: PropTypes.string.isRequired,
  newCommentText: PropTypes.func.isRequired,
  addNewComment: PropTypes.func.isRequired,
};

function mapStateToProps({ contacts, loggedIn }) {
  const { firstName, secondName } = loggedIn;
  const clientID = contacts.card._id;
  const { newComment } = contacts.comments;
  return {
    contacts,
    clientID,
    newComment,
    firstName,
    secondName,
  };
}

export default connect(mapStateToProps, actions)(CommentBox);
