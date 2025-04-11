import { Check } from 'lucide-react'
import React from 'react'
import Pricecart from './Pricecart'

const Price = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-950' id='shop'>
        <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center'>
         <div>
            <h1 className='uppercase text-white mb-6 font-bold'>flexible & affortable</h1>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-white'>Our Pricing Plans</h1>
            <p className='text-white font-medium opacity-70'>Choose from flexible plans to match your creative needs. Enjoy a free plan or upgrade for faster generation, higher resolution, and exclusive features!</p>
            <div className='mt-8'>
              <div className='flex items-center space-x-3 mb-3'>
                <Check className='text-green-500'/>
                <p className='text-lg text-white font-semibold opacity-60'>High Quality Services</p>
              </div>
            </div>

            <div className='mt-8'>
              <div className='flex items-center space-x-3 mb-3'>
                <Check className='text-green-500'/>
                <p className='text-lg text-white font-semibold opacity-60'>24/7 customer support</p>
              </div>
            </div>


            <div className='mt-8'>
              <div className='flex items-center space-x-3 mb-3'>
                <Check className='text-green-500'/>
                <p className='text-lg text-white font-semibold opacity-60'>Affortable rates</p>
              </div>
            </div>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Pricecart price='4' user='1' type='Silver Pack'/>
          </div>

          <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <Pricecart price='8' user='3' type='Golden Pack'/>
          </div>
         </div>
        </div>
    </div>
  )
}

export default Price