import React from 'react'
import './CourseInfo.css'
import TopBar from '../../components/topBar/TopBar' 
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'

export default function CourseInfo() {
  return (
<>
<TopBar/>
<NavBar/>
<Breadcrumb 
links={[
  {id:1,title:'خانه',to:''},
  {id:2,title:'آموزش برنامه نویسی فرلانت اند',to:'category/frontend'},
  {id:3,title:'دوره متخصص جاوا ایسکریپت',to:'cource-info/js-export'},
]
  
}/>
<Footer/>

</>

    )
}
