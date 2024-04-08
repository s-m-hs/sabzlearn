import React, { useEffect, useState } from 'react'
import './LastCourse.css'
import SectionHeader from '../sectionHeader/SectionHeader'
import CourceBox from '../courseBox/CourceBox'
export default function LastCourse() {

const [course,setCourse]=useState()
const getLocalStorage=JSON.parse(localStorage.getItem('user'))

useEffect(()=>{
  async function myApp(){
    const res=await fetch(`http://localhost:5000/v1/courses`,{
      method:'GET'
      , 
      headers:{
        'Authorization':`Bearer ${getLocalStorage.tokenValue}`
    }
    }
  
  ).then(
      (res)=>{
        console.log(res)
        res.json()
      }
    ).then((result)=>{
      console.log(result)
      setCourse(result) 
    })
  }
  myApp() 
},[])

  return (
    <div className='courses'>
      <div className='container'>
 <SectionHeader
 title='جدیدترین دوره ها '
 desc='سکوی پرتاب شما به سمت موفقیت'
 btnTitle='تمامی دوره ها'
 btnHref='cources'
 />
 
 <div className="courses-content">
          <div className="container">
            <div className="row">
<CourceBox/>
<CourceBox/>
<CourceBox/>
<CourceBox/>
<CourceBox/>
<CourceBox/>
      </div>
    </div>
    </div>
    </div>
    </div>
 
  )
}
