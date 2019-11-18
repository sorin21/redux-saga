import {GET_USERS_REQUEST, GET_USERS_SUCCESS} from './types';

export const getUSersRequest = () => ({
  type: GET_USERS_REQUEST
})

export const getUSersSuccess = (items) => ({
  type: GET_USERS_SUCCESS,
  payload: items
})