import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';

class App extends Component {
	componentDidMount = () => {
		let { clientID } = this.props.match.params;
		console.log(clientID);
		this.props.getContact( clientID );
	}
	buildContactCard = () => {
		
	}
	render(){
		return(
			<div className="card">
				{this.props.contactCard && this.buildContactCard()}
			</div>
		)
	}
}

function mapStateToProps ({ contactCard }) {
	return { contactCard };
}
	
export default connect(mapStateToProps,actions)(App);

