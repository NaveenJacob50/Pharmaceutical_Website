import React from 'react'

const newsCard3 = () => {
  return (
    <div className='w-full h-full overflow-visible rounded-2xl relative'>
      <div style={{backgroundColor:'#003569'}} className='absolute top-3 px-2 py-2 pl-8 pr-7 text-xs text-white left -left-2 z-30 rounded-e-2xl font-medium'>20 APR</div>
      <h2 className='absolute inset-0 flex justify-center mt-10 text-white bg-opacity-75 px-10 py-2 rounded-md text-center text-base font-semibold z-20'>The Covid-19 Epidemic In 2022 Is Back</h2>
      <img src="news4.jpg" alt="News Card" className='w-full h-full object-cover z-10 rounded-2xl'/>
      
    </div>
  )
}

export default newsCard3
