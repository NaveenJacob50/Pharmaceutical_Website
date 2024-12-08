import React from 'react'

const aboutCard3 = () => {
  return (
    <div>
      <div className='flex flex-col items-center md:w-full lg:w-auto w-auto sm:p-0 p-2'>
            <div className='rounded-full lg:mt-0 sm:mt-4 mt-0 bg-white xl:w-28 xl:h-28 lg:w-24 lg:h-24 md:w-16 md:h-16 w-12 h-12 absolute lg:-top-14 flex justify-center items-center'>
                <img src="about3.png" alt="" />
            </div>
            <div className='text-white xl:mt-20 lg:mt-14 md:mt-24 sm:mt-20 mt-14 xl:text-xl lg:text-lg md:text-sm text-sm font-medium'>Made In India</div>
            <p className='text-gray-300 text-xs'>Shop local and explore health products</p>
            <p className='text-gray-300 text-xs'>made right here in India</p>
        </div>
    </div>
  )
}

export default aboutCard3
