import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions.js';
import Moment from 'react-moment';
import {AllHtmlEntities} from 'html-entities';

import MyModal from '../../../../modal';


class Comments extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			modal: {
				body:null,
				callback:null,
				clear: null,
			}
		}
	}
	clearModal = () => {
		this.setState({modal: false})
	}
	componentDidMount = () => {
		this.props.getComments( this.props.clientID );
	}
	handleUserDelete = (e, commentID, index) => {
		e.preventDefault();
		let body = "Permanently delete comment?";
		this.setState({
			modal: {
				body,
				callback:()=> this.props.deleteComment(this.props.clientID, commentID, index),
				clear: this.clearModal,
			}
		})
	}
	showComments = () => {
		let comments = this.props.comments;
		return comments.sort((a, b) => a.added < b.added).map(
			( d, index )=>
			<div key={index} className="card mb-4">
				<div className="card-body">
                    <p className="card-text">{AllHtmlEntities.decode(d.comment)}</p>                        
                        <div className="containter-fluid">
                            <div className="row">
                                <div className="col-8">
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Added <strong>	<Moment date={d.added} fromNow /> </strong>  by 
                                            <strong> {AllHtmlEntities.decode(d.addedBy)} </strong> (<Moment date={d.added} format="Do MMM YYYY" />)
                                        </small>
                                    </p>
                                </div>
                                <div className="col-4 ml-0 pl-0 mr-0 text-right">
                                    <p className="card-text ml-0 pl-0 mr-0">
                                        <small className="text-muted">
											<a 
												href="/edit" 
												className="text-success "
												onClick={(e) =>{
													e.preventDefault();

												}}>
												edit</a> 
                                            <a href={"remove/"+d._id} onClick={(e) => this.handleUserDelete(e, d._id, index)} className="text-danger absolute-bottom pl-4">delete</a>
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
				<MyModal
					{...this.state.modal}
					/>
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

