import React, { Component } from 'react';

import { Button, Form, FormGroup, Col, Input, Label } from 'reactstrap';



class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            email: '',
            phoneNo: '',
            profession: 'Engineer'
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        if((this.state.name && this.state.password)=== '')
        alert("Please enter Name and password");
        else{
        this.props.history.replace('/log-in');
        console.log('Current State is: ' + JSON.stringify(this.state));
        const popUp = alert('Thank you for Sign Up! ');
        console.log(popUp);
        event.preventDefault();
        const credentials = JSON.stringify(this.state);
        console.log(credentials);
        localStorage.setItem("User Credentials", credentials);
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mt-5">
                <h3>Sign Up Page</h3>
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
                                                    onChange={this.handleInputChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="password" md={3}>Password</Label>
                                            <Col md={5}>
                                                <Input type="text" id="password" name="password"
                                                    placeholder="Password"
                                                    value={this.state.password}
                                                    onChange={this.handleInputChange} />
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Label htmlFor="email" md={3}>Email</Label>
                                            <Col md={5}>
                                                <Input type="email" id="email" name="email"
                                                    placeholder="Email"
                                                    value={this.state.email}
                                                    onChange={this.handleInputChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="phoneNo" md={3}>PhoneNo.</Label>
                                            <Col md={5}>
                                                <Input type="tel" id="phoneNo" name="phoneNo"
                                                    placeholder="Phone number"
                                                    value={this.state.phoneNo}
                                                    onChange={this.handleInputChange} />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label htmlFor="profession" md={3}>Profession</Label>
                                            <Col md={5}>
                                                <Input type="select" name="profession"
                                                    value={this.state.profession}
                                                    onChange={this.handleInputChange}>
                                                    <option>Engineer</option>
                                                    <option>Doctor</option>
                                                    <option>Teacher</option>
                                                    <option>Others</option>
                                                </Input>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup className='mr-2' row>
                                            <Col md={{ size: 10, offset: 2 }}>
                                                <Button type="submit" color="primary">
                                                    Sign Up
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