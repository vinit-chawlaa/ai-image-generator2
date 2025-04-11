import React from 'react'

const Sectionheading = ({heading}) => {
  return (
    <div className='w-[80%] m-auto'>
        <h1 className='text-2xl lg:text-3xl font-bold text-white'>{heading}</h1>
        <p className='text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200'>Explore our latest AI-generated images, crafted with precision and creativity to inspire your projects.</p>
    </div>
  )
}

export default Sectionheading