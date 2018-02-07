import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
	render() {
		return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-success">
					<a href="/" className="navbar-brand">den den</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
          			<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink 
                                    to="/" 
                                    exact
                                    className="nav-link"
                                    >Home</NavLink>
							</li>	
							<li className="nav-item">
								<NavLink 
                                    to="/login" 
                                    className="nav-link" 

                                >Login</NavLink>
							</li>
							<li className="nav-item">
								<NavLink 
                                    to="/form" 
                                    className="nav-link" 

                                >Form</NavLink>
							</li>
							<li className="nav-item">
								<NavLink 
                                    to="/team" 
                                    className="nav-link"
                                >Team</NavLink>
							</li>							
							<li className="nav-item">
								<NavLink 
                                    to="/contacts" 
                                    className="nav-link"
                                >Contacts</NavLink>
							</li>
							<form class="form-inline">
								<a href="/logout">
									<button class="btn btn-sm align-right btn-outline-secondary" type="button">Logout</button>
								</a>
							</form>
						</ul>
					</div>
				</nav>
            </header>
		)
	}	
}
export default App;