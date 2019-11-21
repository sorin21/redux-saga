import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

class NewUserForm extends Component{
  state = {
    firstName: '',
    lastName: ''
  }

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      firstName: this.state.firstName,
      lastName: this.state.lastName
    });
    this.setState({firstName: '', lastName: ''})
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
           <Label>First Name</Label>
           <Input placeholder="First Name" name="firstName" onChange={event => this.onChange(event)} value={this.state.firstName} required />
        </FormGroup>
        <FormGroup>
           <Label>Last Name</Label>
           <Input placeholder="Last Name" name="lastName" onChange={event => this.onChange(event)} value={this.state.lastName} required />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">
            Create User
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default NewUserForm
