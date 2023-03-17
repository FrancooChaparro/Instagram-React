import { USER_ACTIVE } from "./actions";

const initialState = {
  userActive: [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIVE:

       return {
        ...state,
        userActive: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;