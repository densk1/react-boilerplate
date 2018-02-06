import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {

	componentDidMount = () => {
        let { index, season } = this.props.match.params;
		this.props.getTable( index, season );
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
            <div className="container">
                <table className="table table-sm table-striped">
                    <thead>
                        {this.tableTop()}
                    </thead>
                    <tbody>
                        {this.props.table && this.buildTable()}
                    </tbody>
                </table>
            </div>
		)
	}	
}
	
function mapStateToProps ({ table }) {
	return { table };
}
	
export default connect(mapStateToProps,actions)(App);
