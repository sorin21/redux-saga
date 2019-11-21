import { takeEvery, takeLatest, call, fork, put } from 'redux-saga/effects';

import { GET_USERS_REQUEST, CREATE_USER_REQUEST } from '../actions/types';
import { getUsersSuccess } from '../actions/users';
import * as api from '../api/users';

function* getUsers() {
  try {
    // call allow us to call a promise 
    // any code after this result will run after this code was resolved
    const result = yield call(api.getUsers);
    yield put(getUsersSuccess(result.data.data))
  } catch (error) {
    console.log('Errrosad', error)
  }
}

// this a watchers Saga that watches when an action is dispatched
// and acts on that action that calling a worker saga, geUsers()
function* watchGetUsersRequest() {
  // under the hood this takeEvery is running a while(true) loop, like in playground,
  // so it's constantly waiting, watching for wathever action we pass in
  yield takeEvery(GET_USERS_REQUEST, getUsers)
}

function* createUser(action) {
  // const {payload} = action;
  // console.log('action', action)
  try {
    yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName});
    // refresh the users list with the new added
    yield call(getUsers);
  } catch (error) {
    console.log('Error createUSer', error)
  }
}

function* watchCreateUserRequest() {
  // for takeLatest, for ex if the user enter a type an hit enter
  // but then goes back and correct it, only the latest call is used
  // everytime we observe an redux action using tekeLatest or takeEvery
  // the redux action is passed into the worker saga 
  yield takeLatest(CREATE_USER_REQUEST, createUser)
}


// fork creates a child
const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest)
]

export default usersSagas