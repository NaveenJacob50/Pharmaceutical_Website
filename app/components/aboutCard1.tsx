import React from 'react'

const aboutCard1 = () => {
  return (
    <div>
      <div className='flex flex-col items-center sm:p-0 p-2'>
            <div className='rounded-full lg:mt-0 sm:mt-4 mt-2 bg-white xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 absolute lg:-top-14 flex justify-center items-center'>
                <img src="about1.png" alt="" />
            </div>
            <div className='text-white xl:mt-20 lg:mt-14 md:mt-24 sm:mt-20 mt-16 xl:text-xl lg:text-lg md:text-sm text-sm font-medium'>Clinically Studied</div>
            <p className='text-gray-300 text-xs'>All products that we offer have</p>
            <p className='text-gray-300 text-xs'>undergone lab and safety tests</p>
        </div>
    </div>
  )
}

export default aboutCard1
