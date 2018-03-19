import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AllHtmlEntities } from 'html-entities';
import * as actions from './actions';

import MyModal from '../../modal';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        body: null,
        callback: null,
        clear: false,
      },
    };
  }
  componentDidMount = () => {
    this.props.getUsers();
  }
  handleUserUpdate = (_id, admin, firstName, secondName, index) => {
    const currentRole = this.props.editUser[index].admin;
    const verb = currentRole ? 'Remove' : 'Set';

    const body = `${verb}  ${AllHtmlEntities.decode(firstName)} ${AllHtmlEntities.decode(secondName)} as admin?`;
    this.setState({
      modal: {
        body,
        callback: () => this.props.updateUser(_id, admin),
        clear: this.clearModal,
      },
    });
  }
  handleUserDelete = (_id, index, firstName, secondName) => {
    const body = `Permanently delete ${AllHtmlEntities.decode(`${firstName} ${secondName}`)}?`;
    this.setState({
      modal: {
        body,
        callback: () => { this.props.deleteUser(_id, index); },
        clear: this.clearModal,
      },
    });
  }
  clearModal = () => {
    this.setState({ modal: false });
  }
  render() {
    const { editUser, email } = this.props;
    return (
      <div className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3">
        <MyModal
          {...this.state.modal}
        />
        <h4 className="text-success text-center">Users</h4>
        <table className="col-sm-12 table">
          <thead className="table-sm">
            <tr>
              <th className="w-50 pl-1">Name</th>
              <th className="text-center">Admin</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody className="table-sm">
            {editUser && editUser.map((d, index) => (
              <tr key={d._id}>
                <td className="align-middle">{AllHtmlEntities.decode(`${d.firstName} ${d.secondName}`)}</td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={d.admin}
                    disabled={email === d.email}
                    onChange={
                      () => this.handleUserUpdate(
                        d._id,
                        d.admin,
                        d.firstName,
                        d.secondName,
                      )
                    }
                  />
                </td>
                <td className="text-center">
                  {!(email === d.email) &&
                    <button
                      className="btn-sm btn-outline-secondary"
                      onClick={
                        () => this.handleUserDelete(d._id, index, d.firstName, d.secondName)
                      }
                    >Remove
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

EditUser.propTypes = {
  getUsers: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  editUser: PropTypes.instanceOf(Array).isRequired,
};

function mapStateToProps({ loggedIn, account }) {
  const { editUser } = account;
  const { email } = loggedIn;
  return { editUser, email };
}
export default connect(mapStateToProps, actions)(EditUser);
