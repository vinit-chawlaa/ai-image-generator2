'use client'

import { Button } from '../../../../components/ui/button';
import { Separator } from '../../../../components/ui/separator';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useEffect, useState } from 'react';
import { FaPaypal } from "react-icons/fa";

const Pricecart = ({price,type,user}) => {

  const [show,setShow] = useState(false)



  return (
    <div className='bg-black p-8 rounded-lg text-center'>
        <p className='mt-12 mb-2 text-3xl font-semibold text-white'>{type}</p>
        <p className='text-white'>Great for private individuals</p>
        <Separator className='my-8 border-t-[1px] border-gray-800'/>
        <div className='text-white font-semibold text-2xl'>
          <span className='text-5xl'>${price}</span>/mo
        </div>
        <Separator className='my-8 border-t-[1px] border-gray-800'/>
        <div className='mt-6 space-y-3 text-white opacity-80'>
          <p>{user} User</p>
          <p>Unlimited Projects</p>
          <p>Download Prototypes</p>
        </div> 
        <div className='mt-6'>
        <PayPalScriptProvider options={{ "client-id": "ASUN9dEl7B-VLVeL9NT2ONhkwX7fgswcmWRffKCcHDCFsgpnPyQOaaQAQ4jASByDe6yot-LZYHOzM7Lm" ,  "disable-funding": "card", }}>
           <div> 
           {show ? (
          <>
             <PayPalButtons
             createOrder={(data, actions) => {
                 return actions.order.create({
                     purchase_units: [{
                         amount: { value: price}
                     }]
                 });
             }}
             onApprove={(data, actions) => {
                 return actions.order.capture().then((details) => {
                     alert("Transaction completed by " + details.payer.name.given_name);
                 });
             }}
         />

         <div className='flex flex-col'>
         <Button className="bg-blue-600 text-white flex items-center">
            <FaPaypal className="mr-2 text-xl" />
            Pay with PayPal
          </Button>
         </div>
          </>
           )
           :
           (
            <Button onClick={() => setShow(true)} className='bg-white cursor-pointer' variant={'secondary'} size={'lg'}>Get Now</Button>
           )
          }
           
    
    </div>
        
        </PayPalScriptProvider>
        </div>
    </div>
  )
}

export default Pricecart