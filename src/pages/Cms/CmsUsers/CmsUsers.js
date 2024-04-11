import React, { useEffect, useState } from 'react'
import CmsDataTable from '../../../components/CmsDataTable/CmsDataTable'

export default function CmsUsers() {
const [users,setUsers]=useState([])



useEffect(()=>{
  const getLocalStorage=JSON.parse(localStorage.getItem('user'))
  console.log(getLocalStorage)
  async function myApp(){
    const res=await fetch(`http://localhost:5000/v1/users`,{
      method:'GET',
      headers:{
        Authorization:`Bearer ${getLocalStorage.tokenValue}`
    }
    }).then(res=>console.log(res))
  }
  myApp()
},[])



  return (
    <div>
<CmsDataTable title='لیست کاربران'>

<table className='table table-striped cmstable-user'>
  <thead>
    <tr>
      <th>شناسه</th>
      <th>نام</th>
      <th>نام خانوادگی</th>
      <th>شماره</th>
      <th>ایمیل</th>
      <th>رمزعبور</th>
      <th>ویرایش</th>
    </tr>
  </thead>
  <tbody>
    <tr>
<td>33568</td>
<td>علی</td>
<td>احمدی</td>
<td>09196025114</td>
<td>mhsseyyed@yahoo.com</td>
<td>110110110</td>
<td></td>
    </tr>
  </tbody>
</table>

</CmsDataTable>

    </div>
  )
}
