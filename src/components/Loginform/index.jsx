import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			emailaddress: 	'',
			password: 		'',
			stayloggedin: 	true,
			submitted:		false,
		}
	}
	onLoginSubmit = (e) => {
		e.preventDefault();
		this.setState({ stayloggedin: this.state.stayloggedin ? false : true })			
		const { emailaddress, password, stayloggedin } = this.state;

		if (emailaddress && password) {
			this.setState({ submitted: true });
			this.props.doLogin(emailaddress, password, stayloggedin);
		}
	}
	render() {
        let { loggedIn, onFail } = this.props
        if ( loggedIn.email ){
            return <Redirect push to={"/contacts"} />
        }
  
		return (
            <div id="mainloginform" className="container">
                <div className="row">
                    <div className="col col-sm-6 offset-sm-3">
                        <form >
                            <div className="form-group">
                                <input 
                                    className="form-control"
                                    type="text" 
                                    name="emailaddress" 
                                    value={this.state.emailaddress} 
                                    placeholder="Email Address"
                                    onChange={(e) => this.setState({ emailaddress: e.target.value })} 
                                    required
									/>
                            </div>
                            <div className="form-group">
								<input 
                                    className="form-control"
                                    type="password" 
                                    name="password" 
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={(e) => this.setState({ password: e.target.value })} 
									required
                                    />
								<div className="invalid-feedback">
									Requires 1 number and 1 lower/uppercase character.
								</div>
                            </div>
                            {/*<div className="form-group">
                                <label className="text-muted small stayloggedinlabel form-control-label">
                                    <input 
										type="checkbox" 
										name="stayloggedin" 
										checked={this.state.stayloggedin}
                                        value={this.state.stayloggedin}
										onChange={() => this.setState({ stayloggedin: this.state.stayloggedin ? false : true })}
										/>Keep me logged in.
                                </label>
                            </div>*/}
                            <div className="form-group mb-0 pb-0">
                                <button 
                                    onClick={(e) => (this.onLoginSubmit(e))}
                                    type="button"
                                    className="w-100 btn btn-success"
                                    color="success"
                                    
                                    >Login</button>
                            </div>
							{onFail &&
                            <div className="form-group mt-0 pt-0">
								<div className="col-12 pl-4 pt-4 m-o text-center pb-0">
									 <span className="text-danger small m-0 p-0">Please provide valid credentials.</span>
								</div>
							</div>
							}
                        </form>
                    </div>	
                </div>
            </div>
		);
	}
}




function mapStateToProps ({ loggedIn }) {
	const { onFail } = loggedIn
	return { loggedIn, onFail };
}
	
export default connect(mapStateToProps,actions)(App);
