import React, { Component } from 'react';
import { 
	Container, 
	Table 
} from 'reactstrap';

import NavBar from '../../components/Navbar';
const decode = require('unescape');


class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			tableData: null,
		};
	}
	componentWillMount = () => {
		this.fetchTableData();
	}
	fetchTableData = () => {
		return fetch('http://do:3000/team/0/leaguetable/')
			.then((response) => response.json())
			.then((responseJson) => {
			  
			this.setState({tableData:responseJson.result })
			
			})
			.catch((error) => {
			  console.error(error);
			});
	}
	buildTable = () => {
		let position = 1;
		console.log('decode', decode('&#039;'))
		return(this.state.tableData.map(d =>  
				<tr key={d.SquadID}>
					<td>{position++}</td>
					<td>{decode(d.SquadPlayerName)}</td>
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
							{this.state.tableData && this.buildTable()}
						</tbody>
					</Table>
				</Container>
			</div>
		)
	}	
}	
	
export default App;