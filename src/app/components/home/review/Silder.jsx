'use client'

import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Reviewcard from './Reviewcard'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1,
      slidesToSlide : 1,
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 1,
      slidesToSlide : 1,
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide : 1,
    }
  };


const Silder = () => {

  const para = [
    'This AI image generator is incredibly fast and easy to use. The image quality is outstanding, and the customization options make it even better. It has truly streamlined my creative process and saved me a lot of time',
    '"I was amazed by how effortlessly this AI generates high-quality images. The details and realism are impressive, and it saves me hours of work. Whether for design projects or creative inspiration, this tool is a game-changer!',
    'I was amazed by how quickly this AI generated high-quality images! The results were stunning, and the customization options made it even better. This tool has truly streamlined my creative process. Highly recommended!'
  ]
    
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
            <div>
            <Reviewcard image='/images/u1.jpg' name='James Carter' role='Engineer' para={para[0]}/>
            </div>

            <div>
            <Reviewcard image='/images/u2.jpg' name='Jessica Doe' role='Content Creator' para={para[1]}/>
            </div>
            

            <div>
            <Reviewcard image='/images/u3.jpg' name='Ethan Reynolds' role='Web Developer' para={para[2]}/>
            </div>
            
            
        </Carousel>
    </div>
  )
}

export default Silder