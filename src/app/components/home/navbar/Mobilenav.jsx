import { XIcon } from 'lucide-react'
import { Link } from 'react-scroll';
import React from 'react'
import { Navlinks } from '../../../constant/constant';






const Mobilenav = ({shownav,closeNav}) => {

  const navopen = shownav ? 'translate-y-0' : 'translate-y-[-200%]'

  return (
  <div>
      <div className={`text-white ${navopen} fixed justify-center flex flex-col h-screen transform transition-all duration-1000 w-full bg-gray-950 space-y-6 z-[1050] top-0`}>
      {Navlinks.map((link) => (
        <Link key={link.id} to={link.url} smooth={true} offset={-70} duration={800}>
         <p className='text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]' onClick={closeNav}>{link.label}</p>
        </Link>
      ))}
      <XIcon onClick={closeNav} className='cursor-pointer absolute top-[0.7rem] right-[1.4rem] sm:h-8 w-6 h-6'/>
    </div>
  </div>
  )
}

export default Mobilenav