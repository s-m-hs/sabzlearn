import React, { useContext, useEffect, useState } from 'react'
import './NavBar.css'
import AuthContext from '../../context/loginContext'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [navBarArray, setNavBarArray] = useState([])

  const authContextNav = useContext(AuthContext)
  useEffect(() => {
    async function myApp() {
      const res = await fetch(`http://localhost:5000/v1/menus`, {
        method: 'GET'
      }).then(res => res.json()).then(
        result => {
          setNavBarArray(result)
        }
      )
    }
    myApp()
  }, [])

  return (
    <div className="main-header">
      <div className="container-fluid">
        <div className="main-header__content">
          <div className="main-header__right">
            <img src="/./photo_2023-12-28_17-14-03.jpg" className="main-header__logo" alt="لوگوی سبزلرن" />

            <ul className="main-header__menu">

              <li className="main-header__item">
                <Link to='/' className="main-header__link">صفحه اصلی</Link>
              </li>
              {navBarArray.map((item,index) => (
                <li key={index} className="main-header__item">
                  <Link to={item.href} className="main-header__link"> {item.title}</Link>
                  {item.submenus != 0 && (<>
                    <i className="fas fa-angle-down main-header__link-icon"></i>
                    <ul className="main-header__dropdown">
                      {item.submenus.map(((item,index) => (
                        <li key={index} className="main-header__dropdown-item">
                          <Link to={item.href} className="main-header__dropdown-link">{item.title} </Link>
                        </li>
                      )))}
                    </ul>
                  </>


                  )}

                </li>
              ))}
            </ul>
          </div>

          <div className="main-header__left">
            <a href="#" className="main-header__search-btn">
              <i className="fas fa-search main-header__search-icon"></i>
            </a>
            <a href="#" className="main-header__cart-btn">
              <i className="fas fa-shopping-cart main-header__cart-icon"></i>
            </a>

            {authContextNav.userInfo ? (<Link href="#" className="main-header__profile">
              <span className="main-header__profile-text">{authContextNav.userInfo.name} </span>
            </Link>) :
              (<Link to="login" className="main-header__profile">
                <span className="main-header__profile-text"> ورود/ثبت نام </span>
              </Link>)


            }



          </div>
        </div>
      </div>
    </div>
  )
}
