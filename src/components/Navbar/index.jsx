import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-success" >
					<Link to="/" className="navbar-brand">
					<img className=" w-50 " src="img/iplogo.png" alt="logo"/>
					</Link>
					
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
          			<div className="collapse navbar-collapse w-50" id="navbarNav">
                        { this.props.isLoggedIn &&
						<ul className="navbar-nav w-100 justify-content-center mb-sm-0 mb-4">
							<li className="nav-item">
								<NavLink 
                                    to="/form" 
                                    className="nav-link" 

                                >Form</NavLink>
							</li>							
							<li className="nav-item">
								<NavLink 
                                    to="/contacts" 
                                    className="nav-link"
                                >Contacts</NavLink>
							</li>
							<li className="nav-item">
								<NavLink 
                                    to="/account" 
                                    className="nav-link"
                                >Account</NavLink>
							</li>
						</ul>}
						<ul className="nav navbar-nav ml-auto justify-content-end w-25">
							<li className="nav-item ">
                                <form className=" form-inline ">
                                    {this.props.isLoggedIn ?
                                        <NavLink to="/logout">
                                            <button className="btn btn-md btn-outline-secondary" type="button">Logout</button>
                                        </NavLink>
                                        :
                                        <NavLink to="/">
                                            <button className="btn btn-md btn-outline-secondary" type="button">Login</button>
                                        </NavLink>
                                    }                                    
								</form>
							</li>
						</ul>
					</div>
				</nav>
            </header>
		)
	}	
}
export default App;