import { USER_ACTIVE } from "./actions";

const initialState = {
  userActive: [],
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIVE:      
    const userActive = action.payload;
    const uss = localStorage.setItem("USUARIO", JSON.stringify(userActive))
    return { ...state,
        UserActive : JSON.parse(localStorage.getItem("USUARIO")) 
    }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;