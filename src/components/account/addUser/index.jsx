import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

import AddUserForm from './form';

class AddUser extends Component {
  addUserHandler = (values) => {
    const { addNewUser } = this.props;
    addNewUser(values);
  }
    
  render() {
    const {
      addUser
    } = this.props;
    return (
      <AddUserForm
        onSubmit={this.addUserHandler}
        onSuccess={addUser}
      />
    );
  }
}

function mapStateToProps({ account }) {
  const { addUser } = account;
  return { addUser };
}
export default connect(mapStateToProps, actions)(AddUser);
