import React from 'react'
import './CourseInfo.css'
import TopBar from '../../components/topBar/TopBar' 
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import CourceDetailBox from '../../components/courceDetailBox/CourceDetailBox'

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
    <section class="course-info">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <a href="#" class="course-info__link">
              آموزش برنامه نویسی فرانت اند
            </a>
            <h1 class="course-info__title">
              آموزش 20 کتابخانه جاوااسکریپت برای بازار کار
            </h1>
            <p class="course-info__text">
              امروزه کتابخانه‌ها کد نویسی را خیلی آسان و لذت بخش تر کرده اند. به قدری که حتی امروزه هیچ شرکت برنامه نویسی پروژه های خود را با Vanilla Js پیاده سازی نمی کند و همیشه از کتابخانه ها و فریمورک های موجود استفاده می کند. پس شما هم اگه میخواید یک برنامه نویس عالی فرانت اند باشید، باید کتابخانه های کاربردی که در بازار کار استفاده می شوند را به خوبی بلد باشید
            </p>
            <div class="course-info__social-media">
              <a href="#" class="course-info__social-media-item">
                <i class="fab fa-telegram-plane course-info__icon"></i>
              </a>
              <a href="#" class="course-info__social-media-item">
                <i class="fab fa-twitter course-info__icon"></i>
              </a>
              <a href="#" class="course-info__social-media-item">
                <i class="fab fa-facebook-f course-info__icon"></i>
              </a>
            </div>
          </div>

          <div class="col-6">
            <video src="" poster="/images/courses/js_project.png" class="course-info__video" controls></video>
          </div>
        </div>
      </div>
    </section>


    <main class="main">
      <div class="container">
        <div class="row">
          <div class="col-8">
            <div class="course">
              {/* <!-- Start Course Boxes --> */}
              <div class="course-boxes">
                <div class="row">


<CourceDetailBox title='وضعیت دوره ' text='به اتمام رسیده ' icon='graduation-cap'/>
<CourceDetailBox title='وضعیت دوره ' text='به اتمام رسیده ' icon='clock'/>
<CourceDetailBox title='وضعیت دوره ' text='به اتمام رسیده ' icon='calendar-alt'/>
<CourceDetailBox title='وضعیت دوره ' text='به اتمام رسیده ' icon='user-alt'/>
<CourceDetailBox title='وضعیت دوره ' text='به اتمام رسیده ' icon='info-circle'/>
<CourceDetailBox title='وضعیت دوره ' text='به اتمام رسیده ' icon='fa-play'/>




                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>
                  </main>
                  



<Footer/>

</>

    )
}
