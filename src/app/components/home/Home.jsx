'use client'

import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import About from './About/About'
import Price from './Price/Price'
import Review from './Review/Review'
import Faq from './Faq/Faq'
import Recentimage from './recentimage/Recentimage'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {


  useEffect(() => {
    const initaos = async () => {
     await import('aos')
     AOS.init({
       duration : 1000,
       easing : 'ease',
       once : true,
       anchorPlacement : 'top-bottom'
     })
    }
    initaos()
   },[])

  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Recentimage/>
      <About/>
      <Price/>
      <Review/>
      <Faq/>
    </div>
  )
}

export default Home