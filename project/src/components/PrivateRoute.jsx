import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { Navigate } from "react-router-dom";


export default function PrivateRoute({children}){
    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
       return <Navigate to = "/login" />
    }

    return children;
}