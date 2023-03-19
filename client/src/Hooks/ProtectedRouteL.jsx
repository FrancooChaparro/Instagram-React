import { Navigate, Outlet } from "react-router-dom";
import { Login } from "../components/Login";
import { LoginResponsive } from "../components/LoginResponsive";


export const ProtectedRouteL = ({ isAllowed, children, redirecTo }) => { 

    if (isAllowed > 650) { 
        return <Login />
    }
    return  < LoginResponsive />
}