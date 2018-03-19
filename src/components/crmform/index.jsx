import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as actions from './actions';

import ContactForm from '../form/';

class Form extends Component {
  componentWillUnmount = () => {
    this.props.clearContactID();
  }
  submit = values => this.props.addNewContact({ values });

  render() {
    const { cardID } = this.props;
    return (
      <div className="container">
        { cardID &&
          <Redirect push to={`/contacts/card/${cardID}`} />}
        <div className="row">
          <div className="col-sm-12">
            <ContactForm
              onSubmit={this.submit}
              showPlaceholder
            />
          </div>
        </div>
      </div>
    );
  }
}
Form.propTypes = {
  clearContactID: PropTypes.func.isRequired,
  addNewContact: PropTypes.func.isRequired,
  cardID: PropTypes.string.isRequired,
};


function mapStateToProps({ contacts }) {
  const { cardID } = contacts;
  return { cardID };
}
export default connect(mapStateToProps, actions)(Form);
