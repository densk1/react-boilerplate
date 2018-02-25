import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactFileReader from 'react-file-reader';
import Dropzone from 'react-dropzone'
import csv from 'csv';


//import * as actions from './actions.js';


class ImportContacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dragEnter: false,
			accepted: [],
			rejected: []
		}
	}
	handleFiles = files => {
		var reader = new FileReader();
		reader.onload = function(e) {
		// Use reader.result
		alert(reader.result)
		}
	  reader.readAsText(files[0]);
	}
/*	onDrop = (e) => {
		console.log(e);
		
	}*/
onDrop = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        csv.parse(reader.result, (err, data) => {
            console.log(data);
        });
    };

    reader.readAsBinaryString(e[0]);
}
    render() {
        return(
			<form 
				
				className="card card-body col-xs-12 offset-sm-1 col-sm-10 offset-md-1 col-md-10 mb-3">
				<div className="form-group row mb-0 pb-0">
					<div className="col-12">
						<h4 className="text-success text-center">Import Contacts</h4>
					</div>
				</div>
				
				<Dropzone 
					// https://github.com/react-dropzone/react-dropzone/tree/master/examples/Accept
					// https://stackoverflow.com/questions/43756014/convert-csv-to-json-client-side-with-react-dropzone
					accept="text/csv"
					onDrop={this.onDrop}
					className={"dropzone-style border-primary p-5 "+(this.state.dragEnter ? " bg-primary text-white" : "")}
					onDragEnter={() => this.setState({dragEnter: true})}
					onDragLeave={() => this.setState({dragEnter: false})}
					>
					<div>
						Drop your <strong>.CSV</strong> files here to upload.
					</div>
				</Dropzone>
			</form>
        )
    }

}

function mapStateToProps ({ account }) {
    const { changePass } = account;
	return { changePass };
}
export default connect(mapStateToProps,null)(ImportContacts);