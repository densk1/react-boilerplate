import React, { Component } from 'react';
/*
import { connect } from 'react-redux';
import * as actions from './actions';
*/

class Form extends Component {
	
	render() {
		return(
            <h1>hello</h1>
        )
	}

}

/*

function mapStateToProps ({ loginResult }) {
	return { loginResult };
}
	
export default connect(mapStateToProps,actions)(App);

*/

/*
buildForm = () => {
        return(
			<div className="container">
				<form class="needs-validation" novalidate>
				<h1 className="success text-center">Person Name</h1>
				<div className="form-group row">
					<label htmlFor="name-text-input" className="col-sm-2 col-form-label text-muted	">Name</label>
					<div className="col-sm-5">
						<input className="form-control" type="text" value={ this.myname } onChange={(e) => { this.myname = e.target.value }} />
					</div>
					<div className="col-sm-5">
						<input className="form-control" type="text" value={ this.myname } onChange={(e) => { this.myname = e.target.value }} />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="job-title-input" className="col-sm-2 col-form-label">Job Title</label>
					<div className="col-sm-10">
						<input className="form-control" type="search" value="sasd" id="job-title-input" value={ this.title } onChange={(e) => { this.title = e.target.value }} />
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="email-input" className="col-sm-2 col-form-label">Email</label>
					<div className="col-sm-10">
						<input className="form-control" type="email" id="email-input" value={ this.email } onChange={(e) => { this.email = e.target.value }}/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="mobile-input" className="col-sm-2 col-form-label">Mobile</label>
					<div className="col-sm-10">
						<input className="form-control" type="text" id="mobile-input" value={ this.mobile } onChange={(e) => { this.mobile = e.target.value }}/> 
					</div>
				</div>
				<div className="form-group row">
					<div className="offset-sm-2 col-sm-10">
						<textarea className="form-control" ></textarea>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="tel-input" className="col-sm-2 col-form-label">Telephone</label>
					<div className="col-sm-10">
						<input className="form-control" type="tel" id="tel-input" value={ this.telephone } onChange={(e) => { this.telephone = e.target.value }}/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="example-datetime-local-input" className="col-sm-2 col-form-label">Date and time</label>
					<div className="col-sm-10">
						<input className="form-control" type="datetime-local" id="example-datetime-local-input"  value={ this.datetime } onChange={(e) => { this.datetime = e.target.value }}/>
					</div>
				</div>
				<div className="form-group row">
					<label htmlFor="example-date-input" className="col-sm-2 col-form-label">Date</label>
					<div className="col-sm-10">
						<input className="form-control" type="date" value="2011-08-19" id="example-date-input" /> </div>
				</div>
				<div className="form-group row">
					<label htmlFor="example-month-input" className="col-sm-2 col-form-label">Month</label>
					<div className="col-sm-10">
						<input className="form-control" type="month" value="2011-08" id="example-month-input" /> </div>
				</div>
				<div className="form-group row">
					<label htmlFor="example-week-input" className="col-sm-2 col-form-label">Week</label>
					<div className="col-sm-10">
						<input className="form-control" type="week" value="2011-W33" id="example-week-input" /> </div>
				</div>
				<div className="form-group row">
					<label htmlFor="example-time-input" className="col-sm-2 col-form-label">Time</label>
					<div className="col-sm-10">
						<input className="form-control" type="time" value="13:45:00" id="example-time-input" /> </div>
				</div>
				<div className="form-group row">
					<label htmlFor="example-color-input" className="col-sm-2 col-form-label">Color</label>
					<div className="col-sm-10">
						<input className="form-control" type="textbox" value="#563d7c" id="example-color-input" /> </div>
				</div>
				</form>
			</div>
		)
    }
*/

export default Form;