import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import LeagueTable from './components/Table';

class App extends Component {

	componentDidMount = () => {
        let { 
			index, 
			season 
		} = this.props.match.params;
		this.props.getTable( index, season );
	}

	render(){
		return (
			<LeagueTable 
				id={"leaguetable"}
				table={this.props.table} 
				tableClasses={"table table-sm table-striped"}
			/>
		)
	}	
}
	
function mapStateToProps ({ table }) {
	return { table };
}
	
export default connect(mapStateToProps,actions)(App);
