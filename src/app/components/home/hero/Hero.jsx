'use client'

import { Button } from '../../../../components/ui/button';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner';
import { Loader } from 'lucide-react'


const Hero = () => {

  const [prompt, setPrompt] = useState('')
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)



  const handleImageGeneration = async () => {
    setLoading(true)
    

      let token  = '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'
      
      try{
        const response = await fetch(
          "https://router.huggingface.co/hf-inference/models/ZB-Tech/Text-to-Image",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ "inputs": prompt }),
          }
        );

        if(response.ok)
        {
          toast.success('Image Generated Successfully!')
        }

        const blob = await response.blob();
        const imageurl = URL.createObjectURL(blob)
        setImage(imageurl)
        
      }

      catch(err) {
       toast.error(err.message)
      }

      finally {
        setLoading(false)
      }
     
  }

  const handledownloadimage = () =>{
    const link = document.createElement('a')
    link.href = image
    link.download = 'generated-img.jpg'
    link.click()
  }

  return (
    <div className='w-[95%] 2xl:min-h-screen relative mx-auto my-[20vh]'>
      <div className='relative z-10 text-white flex flex-col items-center justify-center'>
        <h1 data-aos="fade-up" className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-orange-300  to-cyan-500 bg-clip-text text-transparent'>Create Beautiful Image with <br /> Artificial Intelligence</h1>
        <p data-aos="fade-up"  data-aos-delay="100" className='mt-3 text-sm md:text-base font-semibold text-center text-gray-300'>Get started with our AI-powered image generator tools</p>
        <div className='h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between'>
          <input type="text" placeholder='Generate Your Dream Image' className='h-full rounded-lg outline-none text-black block flex-1 placeholder:text-xs sm:placeholder:text-base' value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <Button variant={'default'} size={'lg'} className='bg-black cursor-pointer' onClick={handleImageGeneration}>Generate</Button>

        </div>
        <div className='flex items-center mt-6 space-x-4 flex-wrap gap-y-2'>
          <p>Popular Tag : </p>
          <Button variant={'secondary'} className='bg-white text-black cursor-pointer'>Creative</Button>
          <Button variant={'secondary'} className='bg-white text-black cursor-pointer'>HyperReality</Button>
          <Button variant={'secondary'} className='bg-white text-black cursor-pointer'>Steampunk</Button>
          <Button variant={'secondary'} className='bg-white text-black cursor-pointer'>Animation</Button>
          <Button variant={'secondary'} className='bg-white text-black cursor-pointer'>Business</Button>
        </div>
        {loading && (
          <div>
            <Loader className='animate-spin mt-8' />
          </div>
        )}
        {image && <div className='mt-8 flex flex-col items-center'>
          <img src={image} alt="ai image" className='max-w-full h-[500px] rounded-lg shadow-lg object-cover' loading='lazy' />
          <Button className='mt-4 mb-4 bg-orange-500 hover:bg-orange-800' onClick={handledownloadimage}>Download</Button>
        </div>}
      </div>
    </div>
  )
}

export default Hero
