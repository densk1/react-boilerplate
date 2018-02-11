import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './actions.js';


class Contacts extends Component {
	
	constructor (props) {
		super(props);
		this.state = {
			id: null,
		}
	}
	componentDidMount = () => {
		this.props.getList()
	}

	tableHeader = () => {
		return (
			<tr>
				<th>Name</th><th>Email</th><th>Role</th><th>Company</th><th>Telephone</th><th>Mobile</th>
			</tr>
		);
	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="offset-sm-2 col-sm-8 center" >
						<div className="form-group row text-center">

							<div className="col-sm-8" >
								<input className="form-control" type="text" placeholder="Search..." onChange={(e) => this.props.findContact(e.target.value)} />
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
							{ this.state.id && <Redirect push to={"/contacts/card/"+this.state.id}/>}
						</thead>
						<tbody>
							{this.props.contacts.list && this.tableBody()}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
	tableBody = () => {
        return(this.props.contacts.list.map( 
			d => 
            <tr key={d._id} onClick={()=>this.setState({ id: d._id })}>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>Role</td>
                <td>{d.company}</td>
                <td>Telephone</td>
                <td>Mobile</td>
            </tr>

        ))
	}
}
               
               
function mapStateToProps ({ contacts }) {
	return { contacts };
}
	
export default connect(mapStateToProps,actions)(Contacts);

                
                