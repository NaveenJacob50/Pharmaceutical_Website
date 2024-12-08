import React from 'react'

const heroElement3 = () => {
  return (
    <div className='sm:mt-10 md:mt-0 mt-0 sm:mb-0 mb-5'>
      <div className='flex'>
        <img src="hero-1.png" alt="" className='sm:w-20 sm:mr-4 w-14 mr-2'/>
        <div>
            <h2 style={{color:'##17414f'}} className='font-semibold sm:text-xl md:text-lg text-base'>Vitamins</h2>
            <p className='text-xs text-gray-600'>Increased Vitamins and</p>
            <p className='text-xs text-gray-600'>minerals in your diet</p>
        </div>
      </div>
      <div className='flex'>
        <img src="hero-2.png" alt="" className='sm:w-20 sm:mr-4 w-14 mr-2'/>
        <div>
            <h2 style={{color:'##17414f'}} className='font-semibold sm:text-xl md:text-lg text-base'>Weight Loss</h2>
            <p className='text-xs text-gray-600'>Weight Loss</p>
            <p className='text-xs text-gray-600'>Find scientifically proven solutions</p>
        </div>
      </div>
      <div className='flex'>
        <img src="hero-3.png" alt="" className='sm:w-20 sm:mr-4 w-14 mr-2'/>
        <div>
            <h2 style={{color:'##17414f'}} className='font-semibold sm:text-xl md:text-lg text-base'>Functional Foods</h2>
            <p className='text-xs text-gray-600'>Functional Foods</p>
            <p className='text-xs text-gray-600'>From protein powders to baby formula</p>
        </div>
      </div>
    </div>
  )
}

export default heroElement3
