import UsersSagas from './users';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  // all will resolve all promisses
  // so in our case all will allow to all forked processes
  // to be created in parallel and wainting for all to be resolved
  yield all([...UsersSagas])
}