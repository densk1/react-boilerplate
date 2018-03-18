import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from './actions';

import AddUserForm from './form';

class AddUser extends Component {
  addUserHandler = (values) => {
    const { addNewUser } = this.props;
    addNewUser(values);
  };
  render() {
    const { addUser } = this.props;
    return (
      <AddUserForm
        onSubmit={this.addUserHandler}
        onSuccess={addUser}
      />
    );
  }
}

AddUser.propTypes = {
  addNewUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
};
function mapStateToProps({ account }) {
  const { addUser } = account;
  return { addUser };
}
export default connect(mapStateToProps, actions)(AddUser);
