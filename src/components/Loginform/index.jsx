import React, { Component } from 'react';
import { 
	Container, 
	Row, 
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			emailaddress: 	'',
			password: 		'',
			stayloggedin: 	true,
			submitted:		false,
		}
	}
	onLoginSubmit = (e) => {
		e.preventDefault();
		this.setState({ stayloggedin: this.state.stayloggedin ? false : true })			
		const { emailaddress, password, stayloggedin } = this.state;

		if (emailaddress && password) {
			this.setState({ submitted: true });
			this.props.doLogin(emailaddress, password, stayloggedin);
		}
	
	}
	render() {
		return (
            <Container>
                <Row>
                    <Col sm={{size:6, offset:3}}>
                        <Form>
                            <FormGroup>
                                <Input 
                                    type="text" 
                                    name="emailaddress" 
                                    value={this.state.emailaddress} 
                                    placeholder="Email Address"
                                    onChange={(e) => this.setState({ emailaddress: e.target.value })}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Input 
                                    type="password" 
                                    name="password" 
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={(e) => this.setState({ password: e.target.value })}
                                    />
                            </FormGroup>
                            <FormGroup >
                                <Label className="text-muted small stayloggedinlabel">
                                    <input 
										type="checkbox" 
										name="stayloggedin" 
										checked={this.state.stayloggedin}
										onChange={() => this.setState({ stayloggedin: this.state.stayloggedin ? false : true })}
										/>Keep me logged in.
                                </Label>
                            </FormGroup>
                            <FormGroup >
                            <Button 
                                className="w-100"
                                color="success"
								onClick={(e) => (this.onLoginSubmit(e))}
                                >Login</Button>
                            </FormGroup>
                        </Form>
                    </Col>	
                </Row>
				{console.log('Login Result: ', this.props.loginResult)}
            </Container>
			
		);
	}
}




function mapStateToProps ({ loginResult }) {
	return { loginResult };
}
	
export default connect(mapStateToProps,actions)(App);
