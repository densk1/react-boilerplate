import React, { Component } from 'react';


class Contacts extends Component {
	componentDidMount = () => {
		
	}
	tableHeader = () => {
		return (
			<tr>
				<th>Name</th><th>Email</th><th>Role</th><th>Company</th><th>Telephone</th><th>Mobile</th>
			</tr>
		);
	}
	tableBody = () => {

	}
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="offset-sm-3 col-sm-6 center" >
						<div className="form-group row text-center">

							<div className="col-sm-8" >
								<input className="form-control" type="text" />
							</div>
							<div className="col-sm-4" >
 								<button className="btn btn-secondary my-2 my-sm-0 w-100" type="submit">Search</button>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<table className="col-sm-12">
						<thead>
							{this.tableHeader()}
						</thead>
						<tbody>
							{this.tableBody()}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Contacts;