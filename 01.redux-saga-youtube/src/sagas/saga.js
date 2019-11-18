import {takeEvery, takeLatest, put, delay } from 'redux-saga/effects';

// function generator
function* ageUpAsync() {
  yield delay(4000); 
  // 2. Release the Action
  // we dispatch another action, and we need to you put for this
  // put is same like dispatch
  yield put({type: 'AGE_UP_ASYNC', value: 1})
}


// function generator
export function* watchAgeUp() {
  // 1.Catch an Action
  // takeEvery  = observe every action that dispatches
  // action name is AGE_UP and when we catch it we run another function, ageUpAsync 
  yield takeLatest('AGE_UP', ageUpAsync)
}
