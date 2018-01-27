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

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			emailaddress: '',
			password: '',
			stayloggedin: true,
		}
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.setState({ stayloggedin: this.state.stayloggedin ? false : true })
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
								onClick={(e) => (this.onSubmit(e))}
                                >Login</Button>
                            </FormGroup>
                        </Form>
                    </Col>	
                </Row>
            </Container>
		);
	}
}

export default App;