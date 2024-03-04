import { createContext, useState } from "react";


export const AuthContext = createContext()

export default function AuthContextProvider(props){
    const [isAuth,setIsAuth] = useState(false);

    const login = ()=>{
        setIsAuth(true);
    }

    const logout = ()=>{
        alert("Logout successfully")
        setIsAuth(false)
    }

    return (
        <AuthContext.Provider value={{isAuth,login,logout}}>
            {props.children}
        </AuthContext.Provider>
    )
}