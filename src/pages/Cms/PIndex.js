import React from 'react'
import CmsHeader from '../../components/Cms-header/CmsHeader'
import CmsSidebar from '../../components/CmsSidebar/CmsSidebar'
import './PIndex.css'
import {Outlet} from 'react-router-dom'

export default function PIndex() {
  return (
<>
<div className='row pindex-container'>
  <div className='col-3 col-md-2'>
<CmsSidebar/>
  </div>
  <div className='col-9 col-md-10'>
  <CmsHeader/>


<Outlet/>
  </div>

</div>



</>  )
}
