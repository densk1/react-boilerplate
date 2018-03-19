import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './actions';

import MyModal from '../../modal';

import ContactForm from '../../form';
import Comments from '../comments/';

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        body: null,
        callback: null,
        clear: this.clearModal,
      },
    };
  }
  componentDidMount = async () => {
    const { clientID } = this.props.match.params;
    await this.props.getContact(clientID);
  }
  componentWillUnmount = () => {
    this.props.clearCard();
  }
  changeEditable = () => {
    if (this.isEditable) {
      this.isEditable = false;
    } else {
      this.isEditable = true;
    }
  }
  updateContact = (values) => {
    this.props.updateContact(values);
  }
  retEditButton = () => {
    this.changeEditable();
    this.props.editCard(this.isEditable);
  }


  retDeleteButton = () => this.handleCardDelete();
  handleCardDelete = () => {
    const { clientID } = this.props.match.params;
    const body = 'Permanently delete this entry?';
    this.setState({
      modal: {
        body,
        callback: () => {
          this.props.deleteContact(clientID);
          this.props.history.push('/contacts');
        },
        clear: this.clearModal,
      },
    });
  }

  clearModal = () => this.setState({ modal: false });

  isEditable = !false;
  buildContactCard = () => {
    const { clientID } = this.props.match.params;
    return (
      <div className="container-fluid">
        <MyModal
          {...this.state.modal}
        />
        <div className="row">
          <div className=" col-sm-12">
            <ContactForm
              onSubmit={this.updateContact}
              isContactCard={this.isEditable}
              editable
              showPlaceholder={!this.isEditable}
              contactID={clientID}
              buttons={[this.retEditButton, this.retDeleteButton]}
            />
          </div>
          <Comments />
        </div>
      </div>
    );
  }
  render() {
    return this.props.card && this.buildContactCard();
  }
}

ContactCard.propTypes = {
  card: PropTypes.bool.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
  getContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired,
  editCard: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  clearCard: PropTypes.func.isRequired,
};

function mapStateToProps({ contacts }) {
  const card = contacts.card && true;
  const { newComment } = contacts.comments;
  return { card, newComment };
}

export default connect(mapStateToProps, actions)(ContactCard);
