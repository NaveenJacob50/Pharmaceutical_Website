import React from 'react'

import HeroElement1 from './heroElement1'
import HeroElement2 from './heroElement2'
import HeroElement3 from './heroElement3'


const hero = () => {
  return (
    <div style={{backgroundColor:'#e2f5fb'}} className='sm:h-screen md:h-max h-max  sm:mx-6 mx-0 flex flex-col items-center'>
      <h1 style={{color:'#003569'}} className='lg:text-8xl md:text-5xl sm:text-5xl text-3xl font-bold sm:mt-20 md:mt-10 mt-5'>Essential Vitamins</h1>
      <div className='flex justify-center items-center gap-12 flex-wrap xl:mb-28 md:mb-4 mb-0'>
        <HeroElement1/>
        <HeroElement2/>
        <HeroElement3/>
      </div>
    </div>
  )
}

export default hero
