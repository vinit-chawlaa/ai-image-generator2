'use client'

import Image from 'next/image';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 3,
      slidesToSlide : 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 2,
      slidesToSlide : 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide : 1,
    }
  };


const Imageslider = () => {
  return (
    <div>
        <Carousel
 
  responsive={responsive}
  ssr={true} 
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  keyBoardControl={true}
  arrows={true}
>
 {['r1.jpg' , 'r2.jpg' , 'r3.jpg' , 'r4.jpg' , 'r5.jpg' , 'r6.jpg'].map((image,index) => (
    <div key={index} className='p-4'>
     <div className='h-[400px] relative'>
      <Image src={`/images/${image}`} alt='image' className='object-cover rounded-md cursor-pointer' fill/>
     </div>
    </div>
 ))}
</Carousel>;
    </div>
  )
}

export default Imageslider