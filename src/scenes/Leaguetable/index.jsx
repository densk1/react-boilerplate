import React, { Component } from 'react';
import { 
	Container, 
	Table 
} from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import NavBar from '../../components/Navbar';

class App extends Component {
	componentDidMount = () => {
		this.props.getTable();
	}
	buildTable = () => {
		let position = 1;
		return(this.props.table.map(d =>  
				<tr key={d.SquadID}>
					<td>{position++}</td>
					<td>{d.SquadPlayerName}</td>
					<td><div className="plrobj">{d.Squad_Number}</div></td>
					<td>{d.GamesPlayed}</td>
					<td>{d.Wins}</td>
					<td>{d.Draws}</td>
					<td>{d.Losses}</td>
					<td>{d.Points}</td>
					<td>{d.PointsPerGame.toFixed(2)}</td>
				</tr>
		))		
	}
	tableTop = () => {
		return (
					<tr>
						<th></th>
						<th>Player</th>
						<th>#</th>
						<th>Games</th>
						<th>W</th>
						<th>D</th>
						<th>L</th>
						<th>P</th>
						<th>PPG</th>
					</tr>
		)
	}
	render(){
		return (
			<div>
				<NavBar/>
				<Container>
					<Table size="sm" striped>
						<thead>
							{this.tableTop()}
						</thead>
						<tbody>
							{this.props.table && this.buildTable()}
						</tbody>
					</Table>
				</Container>
			</div>
		)
	}	
}
	
function mapStateToProps ({ table }) {
	return { table };
}
	
export default connect(mapStateToProps,actions)(App);
