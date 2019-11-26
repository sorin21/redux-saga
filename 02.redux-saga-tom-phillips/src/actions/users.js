import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  CREATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from "./types";

export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
});

export const getUsersSuccess = ({ items }) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: {
      items
    }
  };
};

export const createUserRequest = ({ firstName, lastName }) => {
  return {
    type: CREATE_USER_REQUEST,
    payload: {
      firstName,
      lastName
    }
  };
};

export const deleteUserRequest = userId => {
  console.log("deleteUserRequest reduceri", userId);
  return {
    type: DELETE_USER_REQUEST,
    payload: {
      userId
    }
  };
};
