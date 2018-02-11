import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import Moment from 'react-moment';
import {AllHtmlEntities} from 'html-entities';


class Comments extends Component {

	componentDidMount = () => {
		this.props.getComments( this.props.clientID );
	}
	parseDate = (date) => {
		let dmy  = new Date(date).getDate();
		console.log(dmy);
		return(
			dmy
		)
	}
	showComments = () => {
		let comments = this.props.contacts.comments;
		return comments.map(
			d=>
			<div key={d._id} className="card mb-4">
				<div className="card-body">
					<p className="card-text">{AllHtmlEntities.decode(d.comment)}</p>
					<p className="card-text">
						<small className="text-muted">
							Added <strong>	<Moment date={d.added} fromNow /></strong> by 
							<strong> {AllHtmlEntities.decode(d.addedBy)} </strong> 
							<a href="" className="text-success">
								edit
							</a>
						</small>
					</p>
				</div>
			</div>
			)
	}
	render() {
		return(
			this.props.contacts.comments && this.showComments()
		)
	}
}

function mapStateToProps ({ contacts }) {
	return { contacts };
}
	
export default connect(mapStateToProps,actions)(Comments);

