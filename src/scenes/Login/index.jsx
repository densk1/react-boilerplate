import React, { Component } from 'react';
import NavBar from '../../components/Navbar';
import LoginForm from '../../components/Loginform';

class App extends Component {
	render(){
		return(
			<div>
				<NavBar/>
				<LoginForm/>
			</div>
		)
	}
}
export default App;