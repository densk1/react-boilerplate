import React, { Component } from 'react';
import { 
	Navbar,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
	Collapse,
	NavbarBrand,
		
} from 'reactstrap';

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
			<div>
				<Navbar color="success" dark expand="sm">
					<NavbarBrand href="/">den den</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} />
          			<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar>
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>	
							<NavItem>
								<NavLink href="login">Login</NavLink>
							</NavItem>	
							<NavItem>
								<NavLink href="table">Table</NavLink>
							</NavItem>	
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}	
}
export default App;