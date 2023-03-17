import axios from "axios";
export const USER_ACTIVE = "USER_ACTIVE";


export function userRegister(payload) { 
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/register`,payload);
        return response;
    };
  };
  
  
  
  export function userLogin(payload) { 
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/login`,payload);
        console.log(response.data);
        return response;
    };
  };
  

  export function postUsersGoogle(payload) { 
    return async function(dispatch){
        const response = await axios.post(`http://localhost:3001/google`,payload);
        return response;
    };
  };
  

  export function loginGoogle(payload) { 
    return async function(dispatch){
        let json  = await axios.post(`http://localhost:3001/loginGoogle`,payload);
        return json.data
    };
  };




  export function UserActive (payload) { 
    console.log(payload, "paylo");
    return  function(dispatch){
        return dispatch({
            type: USER_ACTIVE,
            payload: payload.data
        });
    };
  };