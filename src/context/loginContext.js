import { createContext } from "react";



export const LoginContext=createContext()
export const RegisterContext=createContext()

 const AuthContext=createContext({
    isLogedIn:false,
    token:false,
    userInfo:false,
    login:()=>{},
    logout:()=>{}
})
export default AuthContext