import React from 'react'
import './Cources.css'
import TopBar from '../../components/topBar/TopBar' 
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
import Breadcrumb from '../../components/breadcrumb/Breadcrumb'
import CourceBox from './../../components/courseBox/CourceBox'
import Pagination from '../../components/pagination/Pagination'


export default function Cources() {
  return (
    <>
        <TopBar/>
    <NavBar/>
    <Breadcrumb
    links={[
      {id:1,title:'خانه',to:''},
      {id:2,title:'تمامی دوره ها',to:'cources'},
     
    ]
      
    }
    />
    <section className='courses'>
        <div className='container'>
            <div className='courses-content'>
                <div className='row'>
<CourceBox/>
<CourceBox/>
<CourceBox/>
<CourceBox/>
<CourceBox/>
<CourceBox/>
<CourceBox/>
                </div>
            </div>
           <Pagination/>
        </div>
        

    </section>

<Footer/>

    </>

  )
}
