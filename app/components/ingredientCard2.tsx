import React from 'react'
import Link from 'next/link'

const ingredientCard2 = () => {
  return (
    <div>
      <div style={{backgroundImage:"url('ingredients2.png')",
        backgroundSize:'contain',
         backgroundRepeat: 'no-repeat',
         backgroundPosition:'right bottom',
    }} className='bg-cyan-100 xl:w-80 xl:h-52 w-72 h-44 rounded-2xl relative'>
      <h2 style={{color:'#17414F'}} className='px-8 font-semibold text-xl pt-5'>Vitamin B3</h2>
      <p className='text-gray-600 text-sm px-8 pt-3 pb-10 font-semibold'>Niacin for healthy gut and skin</p>
      <Link href='' className='text-xs font-semibold px-8 absolute bottom-5 underline underline-offset-4' style={{color:'#17414f'}}>SEE MORE</Link>
    </div>
    </div>
  )
}

export default ingredientCard2
