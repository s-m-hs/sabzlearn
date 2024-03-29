import React from 'react'
import './Index.css'
import Header from '../../components/header/Header'
import LastCourse from '../../components/lastCourse/LastCourse'
import AboutUs from '../../components/aboutUs/AboutUs'
import PopularCources from '../../components/popularCources/PopularCources'
import PrecellCources from '../../components/precellCourse/PrecellCources'
import LastArticles from '../../components/lastArticles/LastArticles'
import Footer from '../../components/footer/Footer'
import InputComponent from '../../components/inputComponent/InputComponent'

export default function Index() {
  return (
    <div>
      <InputComponent/>
<Header/>
<LastCourse/>
<AboutUs/>
<PopularCources/>
<PrecellCources/>
<LastArticles/>
<Footer/>


    </div>

  )
}
