import React from 'react'
import Sectionheading from '../../helper/Sectionheading';
import Imageslider from './Imageslider'

const Recentimage = () => {
  return (
    <div className='pt-40 pb-16 bg-gray-950' id='image'>
        <Sectionheading heading='Explore Our Recent Images'/>
        <div className='w-[90%] md:w-[80%] mx-auto mt-16'>
         <Imageslider/>
        </div>
    </div>
  )
}

export default Recentimage