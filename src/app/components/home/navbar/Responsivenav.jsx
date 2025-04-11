'use client'

import React, { useState } from 'react'
import Nav from './Nav'
import Mobilenav from './Mobilenav'


const Responsivenav = () => {

  const [shownav,setShownav] = useState(false)
  const openNav = () => setShownav(true)
  const closeNav = () => setShownav(false)
  return (
    <div id='home'>
      <Nav openNav={openNav} closeNav={closeNav}/>
      <Mobilenav closeNav={closeNav} shownav={shownav}/>
    </div>
  )
}

export default Responsivenav