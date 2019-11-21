import React, {Component} from 'react';
import {connect} from 'react-redux'

import {getUsersRequest, createUserRequest, deleteUserRequest} from '../actions/users'
import NewUserForm from './NewUserForm';

import UsersList from './UsersList'
// import Testing from '../playground/testing';

class App extends Component {
  constructor(props) {
    super(props);
    // when we render App we fire getUsersRequest action
    // and in the user file, from saga folder, our saga is watching 
    // every time the GET_USERS_REQUEST action is dispached we then act on that
    // with a worker saga getUsers(), then will call the api to get the users 
    // and we log the users
    this.props.onGetUsersRequest();
  }

  handleSubmit = ({firstName, lastName}) => {
    this.props.onCreateUser({firstName, lastName})
  }

  onDeleteUser = (userId) => {
    this.props.onDeleteUserRequest(userId);
  }

  render() {
    const users = this.props.users;
    return (
      <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
        {/* <Testing /> */}
        Hello
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList users={users}   />
      </div>
    );
  }
}

const mapStateFromProps = state => {
  return {
    users: state.users.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetUsersRequest: () => dispatch(getUsersRequest()),
    onCreateUser: (firstName, lastName) => dispatch(createUserRequest({firstName, lastName})),
    onDeleteUserRequest: (userId) => dispatch(deleteUserRequest(userId)),
  }
}

export default connect(mapStateFromProps, mapDispatchToProps)(App);
