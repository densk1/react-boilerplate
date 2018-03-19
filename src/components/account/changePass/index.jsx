import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from './actions';
import ChangePasswordForm from './form';

class ChangePassword extends Component {
  handleChangePassword = (values) => {
    const {
      changeUserPassword,
    } = this.props;
    changeUserPassword(values);
  }
  render() {
    const { changePass } = this.props;
    return (
      <ChangePasswordForm
        onSubmit={this.handleChangePassword}
        onSuccess={changePass.changeSuccess || false}
        onPassError={changePass.changeFail || false}
      />
    );
  }
}

ChangePassword.propTypes = {
  changeUserPassword: PropTypes.func.isRequired,
  changePass: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ account }) {
  const { changePass } = account;
  return { changePass };
}
export default connect(mapStateToProps, actions)(ChangePassword);
