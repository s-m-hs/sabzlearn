
import React, { useCallback, useEffect, useState } from 'react';
import './App.css'
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import AuthContext from './context/loginContext';


export default function App() {
  const [isLogedIn, setIsLogedIn] = useState(false)
  const [token, setToken] = useState(false)
  const [userInfo, setUserInfo] = useState(false)
  let router = useRoutes(routes)


  const login =useCallback( (userInfoValue,tokenValue) => {
    setIsLogedIn(true) 
    setToken(tokenValue)
     setUserInfo(userInfoValue)
    localStorage.setItem('user', JSON.stringify({tokenValue}))
  } ,[token]) 
  const logout =useCallback( () => {
    setIsLogedIn(false)
    setUserInfo(false)
    localStorage.removeItem('user')
  },[]) 
  useEffect(()=>{ 
    const getLocalStorage=JSON.parse(localStorage.getItem('user')) 
    // console.log(getLocalStorage);
    if(getLocalStorage){
      async function myAppGetLocal(){
        const res=await fetch(`http://localhost:5000/v1/auth/me`,{
          method:'GET',
          headers:{
            Authorization:`Bearer ${getLocalStorage.tokenValue}`
        }
        }).then(res=>res.json()).then(
          data=>{
            // console.log(data); 
            setIsLogedIn(true)
            setUserInfo(data)
          }
        ) 
      }
      myAppGetLocal()
    }else{
      setIsLogedIn(false)

    }
    
    
    },[login,logout])

  return (
    <>
      <AuthContext.Provider value={{
        isLogedIn,
        token,
        userInfo, setUserInfo,
        login: login,
        logout: logout
      }} >
        {router}
      </AuthContext.Provider >



    </>


  )

}


