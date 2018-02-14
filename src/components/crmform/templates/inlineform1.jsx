




import React, { Component } from 'react';

class App extends Component {
	render () {
		return(
			<div className="form-group row">
				<label 
					htmlFor={
						this.props.name + this.props.key && this.props.key
					} 
					className="col-2 col-form-label">{this.props.name}</label>
				<div className="col-10">
					{this.props.child}
					
				</div>
			</div>
		)
	}
}

export default App;