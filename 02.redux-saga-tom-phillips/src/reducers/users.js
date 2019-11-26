import { GET_USERS_SUCCESS } from "../actions/types";

const initialState = {
  data: [
    { id: 1, firstName: "Peter", lastName: "Mackenzie" },
    { id: 2, firstName: "Cindy", lastName: "Zhang" },
    { id: 3, firstName: "Ted", lastName: "Smith" },
    { id: 4, firstName: "Susan", lastName: "Fernbrook" },
    { id: 5, firstName: "Emily", lastName: "Kim" },
    { id: 6, firstName: "Peter", lastName: "Zhang" },
    { id: 7, firstName: "Cindy", lastName: "Smith" }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload.items
      };

    default:
      return state;
  }
};

export default usersReducer;
