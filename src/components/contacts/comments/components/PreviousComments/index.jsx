import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { AllHtmlEntities } from 'html-entities';
import * as actions from '../../actions';

import MyModal from '../../../../modal';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        body: null,
        callback: null,
        clear: null,
      },
    };
  }
  componentDidMount = () => {
    this.props.getComments(this.props.clientID);
  }
  clearModal = () => {
    this.setState({ modal: false });
  }
  handleUserDelete = (e, commentID, index) => {
    e.preventDefault();
    const body = 'Permanently delete comment?';
    this.setState({
      modal: {
        body,
        callback: () => this.props.deleteComment(this.props.clientID, commentID, index),
        clear: this.clearModal,
      },
    });
  }
  showComments = () => {
    const { comments } = this.props;
    return comments.sort((a, b) => a.added < b.added).map((d, index) => (
      <div key={d._id} className="card mb-4">
        <div className="card-body">
          <p className="card-text">{AllHtmlEntities.decode(d.comment)}</p>
          <div className="containter-fluid">
            <div className="row">
              <div className="col-8">
                <p className="card-text">
                  <small className="text-muted">
                    Added <strong><Moment date={d.added} fromNow /></strong> by
                    <strong> {AllHtmlEntities.decode(d.addedBy)} </strong> (<Moment date={d.added} format="Do MMM YYYY" />)
                  </small>
                </p>
              </div>
              <div className="col-4 ml-0 pl-0 mr-0 text-right">
                <p className="card-text ml-0 pl-0 mr-0">
                  <small className="text-muted">
                    <a
                      href="/edit"
                      className="text-success "
                      onClick={e => e.preventDefault()}
                    >
                      edit
                    </a>
                    <a
                      href={`remove/${d._id}`}
                      onClick={e => this.handleUserDelete(e, d._id, index)}
                      className="text-danger absolute-bottom pl-4"
                    >
                      delete
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    return (
      <div className="row ">
        <MyModal
          {...this.state.modal}
        />
        <div className="offset-sm-1 col-sm-10">
          {this.props.comments && this.showComments()}
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  comments: PropTypes.instanceOf(Array).isRequired,
  clientID: PropTypes.string.isRequired,
};

function mapStateToProps({ contacts }) {
  const clientID = contacts.card._id;
  const { comments } = contacts.comments;
  return { clientID, comments };
}

export default connect(mapStateToProps, actions)(Comments);
