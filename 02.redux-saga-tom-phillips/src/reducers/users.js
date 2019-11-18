import {GET_USERS_REQUEST, GET_USERS_SUCCESS} from '../actions/types';

const initialState = {
  items: []
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS_REQUEST: 
      return {
        items: action.payload
      }

    default: 
    return state;
  }
}

export default usersReducer;