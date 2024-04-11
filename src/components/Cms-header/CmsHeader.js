
import React, { useEffect, useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LightModeIcon from '@mui/icons-material/LightMode';
import './CmsHeader.css'
export default function CmsHeader() {
 const[flagThem,setFlagThem]=useState(false)
 const[userData,setUserData]=useState({})


const changeThem=()=>{
  setFlagThem(prev=>!prev)
  }

const getLocalStorage=JSON.parse(localStorage.getItem('user'))  
console.log(getLocalStorage);
useEffect(()=>{
  async function myApp(){
    const res=await fetch(`http://localhost:5000/v1/auth/me`,{
      headers:{
        Authorization:`Bearer ${getLocalStorage.tokenValue}`
    }
    }).then(res=>res.json().then(
      result=>{
console.log(result)
setUserData(result)
console.log(userData); 
      }
    ))
  }
  myApp()
},[])



////////////////////////////////////
  useEffect(()=>{
if(flagThem){
    // document.documentElement.style.setProperty('--white','#7209b7')
    document.documentElement.style.setProperty('--themCms','#777')
}else{
  // document.documentElement.style.setProperty('--white','#ffffff')
  document.documentElement.style.setProperty('--themCms','#0a031c')

}
  },[flagThem])

  


  return (
    <div className='header-container' >
        <div className='header-div-right'>
<img className='header-admin-img' src="../download.jpg" alt="" />
<div className='hedaer-admin-div'>
    <p className='header-admin-p-up'>{userData.name}</p>
    <p className='header-admin-p-down'>{userData.role}</p>
</div>

        </div>
        <div className='header-div-left'>
            <div className='hedaer-search-div'>
                 <input className='header-input' type="text" placeholder='جستجوکنید...'/>
            <button className=' header-search'>جستجو</button>
            </div>
            <button className='header-button-left'><NotificationsIcon/></button>
            <button className='header-button-left' onClick={changeThem
            }><LightModeIcon/></button>
        </div>
    </div>
  )
}
