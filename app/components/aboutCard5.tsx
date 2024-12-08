import React from 'react'

const aboutCard5 = () => {
  return (
    <div>
      <div className='flex flex-col items-center lg:mt-6 sm:mt-4 mt-2 sm:p-0 p-2'>
            <div className='rounded-full lg:mt-0 mt-4 bg-white xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 flex justify-center items-center'>
                <img src="about5.png" alt="" />
            </div>
            <div className='text-white xl:mt-8 mt-4 xl:text-xl lg:text-lg md:text-sm text-sm font-medium'>No Risk</div>
            <p className='text-gray-300 text-xs'>We ensure that all products are safe</p>
            <p className='text-gray-300 text-xs'>and within their use-by date</p>
        </div>
    </div>
  )
}

export default aboutCard5
