import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js';
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
    deleteComment = (e, commentID, index) => {
        e.preventDefault();
        this.props.deleteComment(this.props.clientID, commentID, index);
    }
	showComments = () => {
		let comments = this.props.comments;
		return comments.sort((a, b) => a.added < b.added).map(
			( d )=>
			<div key={d._id} className="card mb-4">
				<div className="card-body">
                    <p className="card-text">{AllHtmlEntities.decode(d.comment)}</p>                        
                        <div className="containter-fluid">
                            <div className="row">
                                <div className="col-7">
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Added <strong>	<Moment date={d.added} fromNow /></strong> by 
                                            <strong> {AllHtmlEntities.decode(d.addedBy)} </strong>
                                        </small>
                                    </p>
                                </div>
                                <div className="col-5 mr-0 text-right">
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {/*<a href="" className="text-success ">edit </a> */}
                                            <a href={"remove/"+d._id} onClick={(e) => this.deleteComment(e, d._id)} className="text-danger pl-4">delete</a>
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>  
				</div>
			</div>
			)
	}
	render() {
		return(
            <div className="row ">
                <div className="offset-sm-1 col-sm-10">
                    {this.props.comments && this.showComments()}
                </div>
            </div>
            
		)
	}
}

function mapStateToProps ({ contacts }) {
    let clientID = contacts.card._id;
	let {comments} = contacts.comments; 
	return { clientID, comments };
}
	
export default connect(mapStateToProps,actions)(Comments);

