import React from 'react'
import './Header.css'
import TopBar from '../topBar/TopBar'
import NavBar from '../navBar/NavBar'
import Landing from '../landing/Landing'

export default function Header() {
  return (
    <header className="header">
     <TopBar/>
     <NavBar/>
     <Landing/>

   
    </header>

  )
}
