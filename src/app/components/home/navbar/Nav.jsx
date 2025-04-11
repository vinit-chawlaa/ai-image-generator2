'use client'

import React, { useEffect, useState } from 'react'
import { Navlinks } from '../../../constant/constant'
import { Link } from 'react-scroll';
import {ShoppingCart , MenuIcon, User} from 'lucide-react'
import { useClerk , openSignIn, useUser, UserButton} from '@clerk/nextjs';

const Nav = ({openNav}) => {

  const {openSignIn} = useClerk()

  const {user} = useUser()

  const [navbg,setNavbg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if(window.scrollY >= 90) setNavbg(true)
        if(window.scrollY < 90) setNavbg(false)
    }
  
    window.addEventListener('scroll' , handler)
    return () => window.removeEventListener('scroll', handler)
  },[])

  const bgStyle = navbg ? 'bg-gray-900 shadow-md' : ''

  return (
    <div className={`flex ${bgStyle} items-center justify-between h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-100`}>
        <h1 className='text-3xl text-white font-bold ml-8 md:ml-16'>IMGIAI</h1>
        <div className='md:flex items-center space-x-10 hidden'>
         {Navlinks.map((link) => ( 
          <Link key={link.id} to={link.url} className='after-effect' smooth={true} offset={-70} duration={800}>
            <p className='cursor-pointer'>{link.label}</p>
          </Link> 
         ))}  
        </div> 
        <div className='flex items-center space-x-5 md:spacex-8 text-white mr-8 md:mr-16'>

        {user ? <> <UserButton/> </> : 
        <User className='cursor-pointer w-6 h-6 ' onClick={openSignIn}/>
        }

        
        <Link to='shop' smooth={true} offset={-70} duration={800}>
        <ShoppingCart className='cursor-pointer w-6 h-6' />
        </Link>
       
        <MenuIcon onClick={openNav} className='cursor-pointer w-6 h-6 md:hidden'/>
        </div>
    </div>
  )
}

export default Nav