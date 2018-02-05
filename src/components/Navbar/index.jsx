import React, { Component } from 'react';
class App extends Component {
	constructor (props) {
		super(props);
		this.state = {
			collapsed: true,
		}
	}
	toggleNavbar = () => {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		return (
                <div className="navbar navbar-expand-sm navbar-dark bg-success">
					<a href="/" className="navbar-brand">den den</a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
          			<div class="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a href="/" className="nav-link">Home</a>
							</li>	
							<li className="nav-item">
								<a href="login" className="nav-link">Login</a>
							</li>	
							<li className="nav-item">
								<a href="table" className="nav-link">Table</a>
							</li>
                            <li className="nav-item ">
                                <button className="btn btn-secondary my-2 my-sm-0 " type="submit">Logout</button>
                            </li>
						</ul>
					</div>
				</div>
		)
	}	
}
export default App;