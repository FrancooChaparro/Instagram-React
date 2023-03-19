import { Navigate, Outlet } from "react-router-dom";
import { Home } from "./Home";
import { ResponsiveHome } from "./ResponsiveHome";


export const ProtectedRoute = ({ isAllowed, children, redirecTo }) => { 

    if (isAllowed > 650) { 
        return <Home />
    }
    return  < ResponsiveHome />
}