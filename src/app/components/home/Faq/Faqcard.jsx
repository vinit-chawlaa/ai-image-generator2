import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../../components/ui/accordion';

  

const Faqcard = () => {
  return (
    <div>
        <Accordion type="single" collapsible className="w-full text-white">
      <AccordionItem value="item-1">
        <AccordionTrigger className='md:text-xl lg:text-2xl cursor-pointer'>How does the AI image generator work?</AccordionTrigger>
        <AccordionContent className='text-base md:text-lg transition-all duration-300 ease-in-out'>
        Our AI converts your text prompts into unique images using advanced machine learning algorithms.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='md:text-xl lg:text-2xl cursor-pointer'>Can I use the generated images commercially?</AccordionTrigger>
        <AccordionContent  className='text-base md:text-lg transition-all duration-300 ease-in-out'>
        Yes, you can use them for commercial and personal projects. However, always review our licensing terms before usage.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='md:text-xl lg:text-2xl cursor-pointer'>Is there a free plan available?</AccordionTrigger>
        <AccordionContent className='text-base md:text-lg transition-all duration-300 ease-in-out'>
           Yes! You can generate a limited number of images daily for free. Upgrade for more features and unlimited generations.
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    </div>
  )
}

export default Faqcard