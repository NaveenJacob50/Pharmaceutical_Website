import React from 'react'

const aboutCard4 = () => {
  return (
    <div>
      <div className='flex flex-col items-center md:w-full lg:mt-6 sm:mt-4 mt-2 sm:p-0 p-2'>
            <div className='rounded-full lg:mt-0 mt-4 bg-white xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 flex justify-center items-center'>
                <img src="about4.png" alt="" />
            </div>
            <div className='text-white xl:mt-8 mt-4 xl:text-xl lg:text-lg md:text-sm text-sm font-medium'>Free Shipping</div>
            <p className='text-gray-300 text-xs'>We deliver to your door with no</p>
            <p className='text-gray-300 text-xs'>shipping costs on your orders</p>
        </div>
    </div>
  )
}

export default aboutCard4
