import React, { useEffect, useState } from 'react'
import CmsDataTable from '../CmsDataTable/CmsDataTable'

export default function CmsProducts() {
    const [products,setProducts]=useState([])

useEffect(()=>{
    const getLocalStorage=JSON.parse(localStorage.getItem('user'))

    async function myApp(){
        const res=await fetch(`http://localhost:5000/v1/courses`,{
            headers:{
                'Authorization':`Berear ${getLocalStorage.tokenValue}`
            }
        }).then(res=>res.json()).then(
            result=>{
                console.log(result);
                setProducts(result)
            }
        )
    }
    myApp()
},[])
const addpro=()=>{
  let obj={
    title:'ali',
    name:'razi'
  }
  async function myApp2(){
    const getLocalStorage=JSON.parse(localStorage.getItem('user'))

    const res=await fetch(`http://localhost:5000/v1/courses`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization':`Berear ${getLocalStorage.tokenValue}`
    }
    ,body:JSON.stringify(obj)

    }).then(res=>console.log(res))
  }
  myApp2()
}

  return (
    <div>
    <CmsDataTable title='لیست محصولات'>
    
    <table className='table table-striped cmstable-user'>
      <thead>
        <tr>
          <th>شناسه</th>
          <th>عنوان</th>
          <th>مبلغ </th>
          <th>وضعیت</th>
          <th>لینک</th>
          <th>مدرس</th>
          <th> ویرایش</th>
          <th>حذف </th>
        </tr>
      </thead>
      <tbody>
       
{products.map((item,index)=>
(<tr>
    <td>{index+1}</td>
    <td>{item.name}</td>
    <td>{item.price}</td>
    <td>{item.status}</td>
     <td>{item.shortName}</td>
    <td>{item.creator !=null ? item.creator.name : null}</td>
       <td><button className='btn btn-primary' onClick={addpro}>ویرایش</button></td>
    <td> <button className='btn btn-danger'>حذف</button></td>
        </tr>)
)} 
      </tbody>
    </table>
    
    </CmsDataTable>
    </div>
  )
}
