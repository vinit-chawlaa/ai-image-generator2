import { Button } from '../../../../components/ui/button';
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div className='pt-30 pb-16' id='blog'>
      <div className='w-[80%] mx-auto grid xl:grid-cols-2 grid-cols-1 gap-10 items-center'>
        <div className='order-2 xl:order-1' data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image
            src='/images/about.jpg'
            alt='about'
            width={400}
            height={400}
            className='rounded-lg w-full'
          />
        </div>
        <div className='order-1 xl:order-2'>
          <h1 className='text-gray-300 mb-4 font-semibold text-lg capitalize'>
            What we do
          </h1>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
            Create your own AI Business easily.
          </h1>
          <p className='text-gray-200 mb-8 text-base'>IMGIAI is a powerful AI image generator that creates stunning visuals in seconds. Simply enter your idea, and our advanced AI transforms it into high-quality artwork. Unleash your creativity effortlessly!</p>
          <Link to='contact' smooth={true} offset={-70} duration={800}>
            <Button className='bg-rose-500 w-36 h-12 text-white text-base uppercase cursor-pointer hover:bg-sky-400 transition-all duration-300' size={'lg'}>About Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About