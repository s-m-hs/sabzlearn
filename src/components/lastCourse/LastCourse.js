import React from 'react'
import './LastCourse.css'
import SectionHeader from '../sectionHeader/SectionHeader'
import CourceBox from '../courseBox/CourceBox'
export default function LastCourse() {
  return (
    <div className='courses'>
      <div className='container'>
 <SectionHeader
 title='جدیدترین دوره ها '
 desc='سکوی پرتاب شما به سمت موفقیت'
 btnTitle='تمامی دوره ها'
 />
 
 <div class="courses-content">
          <div class="container">
            <div class="row">
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
