import React, { Component } from 'react';
import { Button, Form, FormGroup, Col, Input, Label} from 'reactstrap';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            touched: {
                name: false,
                password: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    handleSubmit(event) {
        event.preventDefault();
       const userCredential = JSON.parse(localStorage.getItem('User Credentials'));
       if((userCredential.name === this.state.name) && (userCredential.password === this.state.password) )
       this.props.history.push('/movies');
       else alert('Invalid Credentials');
    }
    render() {
        return (
        
            <div className="container">
                <div className="row justify-content-center mt-5">
                <h3>Log In Page</h3>
                </div>
                <div className="row justify-content-center">
                    <div className='col-md-6'>
                        <div className="card">
                            <div className="row p-2">
                                <div className="col-md-12 text-center align-self-center">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup row>
                                    <Label htmlFor="name" md={3}>Name</Label>
                                    <Col md={5}>
                                        <Input type="text" id="name" name="name"
                                            placeholder="Name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('name')} />
                                    </Col>

                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="password" md={3}>Password</Label>
                                    <Col md={5}>
                                        <Input type="password" id="password" name="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleInputChange}
                                            onBlur={this.handleBlur('password')} />
                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Col md={{ size: 10, offset: 2 }}>
                                        <Button type="submit" color="primary">
                                            Log In
                                    </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;