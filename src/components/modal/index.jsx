import React, {Component} from 'react' ;
import { Modal } from 'react-bootstrap';

class MyModal extends Component {
	render (){
		const {
			title,
			body,
			callback,
			clear,
		} = this.props;
		if ( body ) {
			return (
				<div className="w-100">
					<Modal.Dialog>
						{title &&					
						<Modal.Header>
							<Modal.Title>{title}</Modal.Title>
						</Modal.Header>
						}
						<Modal.Body>{body}</Modal.Body>
						<Modal.Footer>
							<button 
								className="btn btn-sm btn-outline-secondary" 
								onClick={()=> {clear()}}
								>Close</button>
							<button 
								className="btn-sm btn-danger"
								onClick={()=> {
									callback();									
									clear();
								}}
								>Confirm</button>
						</Modal.Footer>
					</Modal.Dialog>
				</div>
			)
		}
		return null;
	}
}

export default MyModal