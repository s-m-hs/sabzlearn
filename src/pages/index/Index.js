import React from 'react'
import './Index.css'
import Header from '../../components/header/Header'
import LastCourse from '../../components/lastCourse/LastCourse'
import AboutUs from '../../components/aboutUs/AboutUs'
import PopularCources from '../../components/popularCources/PopularCources'
import PrecellCources from '../../components/precellCourse/PrecellCources'
import LastArticles from '../../components/lastArticles/LastArticles'
export default function Index() {
  return (
    <div>
    <>
    <Header/>  
<LastCourse/>
<AboutUs/>
<PopularCources/>
<PrecellCources/>
<LastArticles/>

      </>

    </div>
  )
}
