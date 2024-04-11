import React from 'react'
import './CmsDataTable.css'
export default function CmsDataTable({title,children}) {
  return (
    <div className='cmsdatatable-container'>

<span className='cmsdatatable-title'>{title}</span>
<div className='datataable-children'>{children}</div>

    </div>
  )
}
