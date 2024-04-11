import React from 'react'
import './CmsSidebar.css'
import { NavLink } from 'react-router-dom';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PeopleIcon from '@mui/icons-material/People';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

export default function CmsSidebar() {
  return (
    <div className='sidebar-container'>
      {/* <h1 className='sidebar-h1'>به داشبورد خوش آمدید</h1> */}
      <div><img src="./../logo192.png" alt=""  className='sidebar-h1'/></div>
      
      <ul className='sidebar-ul'>
        <NavLink to='/mainPage' className='sidebar-li '>
        <OtherHousesIcon/>صفحه اصلی 
        </NavLink>
        <NavLink  to='/products' className='sidebar-li'>
        <ProductionQuantityLimitsIcon/>محصولات
        </NavLink>
        <NavLink to='comments' className='sidebar-li'>
        <AttachEmailIcon/>کامنت ها
        </NavLink>
        <NavLink to='/users' className='sidebar-li'>
        <PeopleIcon/>کاربران
        </NavLink>
        <NavLink to='/offers' className='sidebar-li'>
        <BorderColorIcon/>سفارشات
        </NavLink>
        <NavLink to='/offs' className='sidebar-li'>
        <MoneyOffIcon/>تخفیف ها
        </NavLink>
      </ul>
    </div>
  )
}
