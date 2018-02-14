import React, { Component } from 'react';

class Template extends Component {
	tableTop = () => {
		return (
            <tr>
                <th></th><th>Player</th><th>#</th><th>Games</th>
                <th>W</th><th>D</th><th>L</th><th>P</th><th>PPG</th>
            </tr>
		)
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
	render(){
		return (
            <div className="container">
                <table 
					id={this.props.id} 
					className={this.props.tableClasses}
					>
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

export default Template;