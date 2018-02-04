import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

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
		return (
            <div className="container">
                <div className="row">
                    <div className="col col-sm-6 offset-sm-3">
                        <form className="was-validated">
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
                            <div className="form-group">
                                <label className="text-muted small stayloggedinlabel form-control-label">
                                    <input 
										type="checkbox" 
										name="stayloggedin" 
										checked={this.state.stayloggedin}
                                        value={this.state.stayloggedin}
										onChange={() => this.setState({ stayloggedin: this.state.stayloggedin ? false : true })}
										/>Keep me logged in.
                                </label>
                            </div>
                            <div className="form-group">
                                <button 
                                    type="button"
                                    className="w-100 btn btn-success"
                                    color="success"
                                    onClick={(e) => (this.onLoginSubmit(e))}
                                    >Login</button>
                            </div>
                        </form>
                    </div>	
                </div>
                {console.log('Login: ', this.props.loginResult)}
            </div>
			
		);
	}
}




function mapStateToProps ({ loginResult }) {
	return { loginResult };
}
	
export default connect(mapStateToProps,actions)(App);
