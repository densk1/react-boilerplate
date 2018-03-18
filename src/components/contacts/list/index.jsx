import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { AllHtmlEntities } from 'html-entities';
import * as actions from './actions';


// Styles
const hideableRowLG = { className: 'd-none d-lg-table-cell' };
const hideableRowSM = { className: 'd-none d-sm-table-cell' };

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  componentDidMount = async () => {
    await this.props.getList();
  }
  tableHeader = () => (
    <tr>
      <th>Name</th>
      <th {...hideableRowSM}>Email</th>
      <th>Company</th>
      {/* <th>Desk</th> */}
      <th {...hideableRowLG}>Office</th>
      <th {...hideableRowLG}>Mobile</th>
    </tr>
  )
  tableBody = () => {
    const { list } = this.props.contacts;
    return (
      list.sort((a, b) => (
        a.firstName < b.firstName ? -1 : a.firstName > (b.firstName ? 1 : 0)
      )).map(d => (
        <tr key={d._id} onClick={() => this.setState({ id: d._id })}>
          <td>{AllHtmlEntities.decode(`${d.firstName} ${d.secondName}`)}</td>
          <td {...hideableRowSM}>{d.email}</td>
          <td>{AllHtmlEntities.decode(d.organisation)}</td>
          {/* <td>{d.desk}</td> */}
          <td {...hideableRowLG}>{AllHtmlEntities.decode(d.office)} { AllHtmlEntities.decode(d.extension && `(${d.extension})`)}</td>
          <td {...hideableRowLG}>{AllHtmlEntities.decode(d.mobile)}</td>
        </tr>
      ))
    );
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="offset-sm-2 col-sm-8 center" >
            <div className="form-group row text-center">
              <div className="col-sm-8" >
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => {
                    this.props.findContact(e.target.value);
                  }}
                />
              </div>
              <div className="col-sm-4" >
                <button className="btn btn-secondary my-2 my-sm-0 w-100" type="submit">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <table id="contacttable" className="col-sm-12 table table-striped table-hover ">
            <thead>
              { this.tableHeader() }
              { this.state.id && <Redirect push to={`/contacts/card/${this.state.id}`} /> }
            </thead>
            <tbody>
              { this.props.contacts.list && this.tableBody() }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Contacts.propTypes = {
  getList: PropTypes.func.isRequired,
  findContact: PropTypes.func.isRequired,
  contacts: PropTypes.instanceOf(Object).isRequired,
};

function mapStateToProps({ contacts }) {
  return { contacts };
}

export default connect(mapStateToProps, actions)(Contacts);
