import React, { useEffect, useState } from 'react'
import './TopBar.css'
import {Link} from 'react-router-dom'

export default function TopBar() {
const [topBarArray,setTopBarArray]=useState([])

const getRandomItemFromArray=(arry,randomCount)=>{
const shoffle=[...arry].sort(()=>0.5-Math.random())
return shoffle.slice(0,5)
}

useEffect(()=>{
async function myApp(){
  const res=await  fetch(`http://localhost:5000/v1/menus/topbar`,{
    method:'GET'
  }).then(res=>res.json().then(
    result=>{
      setTopBarArray(result)
       
    }
  ))
}
myApp()
},[])

  return (
    <div className="top-bar">
    <div className="container-fluid">
      <div className="top-bar__content">
        <div className="top-bar__right">
          <ul className="top-bar__menu">
{getRandomItemFromArray(topBarArray,5).map((item,index)=>(
    
            <li key={index} className="top-bar__item">
              <Link to={item.href} className="top-bar__link">{item.title} </Link>
            </li>
))}

          </ul>
        </div>
        <div className="top-bar__left">
          <div className="top-bar__email">
            <a href="#" className="top-bar__email-text top-bar__link">
              sabzlearn@gmail.com
            </a>
            <i className="fas fa-envelope top-bar__email-icon"></i>
          </div>
          <div className="top-bar__phone">
            <a href="#" className="top-bar__phone-text top-bar__link">
              09921558293
            </a>
            <i className="fas fa-phone top-bar__phone-icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
