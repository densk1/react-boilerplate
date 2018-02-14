import React, { Component } from 'react';

class App extends Component {
	render () {
		return(
			<div className="form-group row">
				<label 
					className="col-2 col-form-label" 
					>{this.props.name}</label>
				<div className="col-5">

					{this.props.child[0]}
				</div>
				<div className="col-5">
					{this.props.child[1]}
				</div>
			</div>	
		)
	}
}

export default App;
