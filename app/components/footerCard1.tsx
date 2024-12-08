import React from 'react'

const footerCard1 = () => {
  return (
    <div style={{ backgroundColor: "#215d72" }} className='xl:w-80 xl:h-20 lg:w-64 lg:h-16 bg-slate-400 mt-7 rounded-xl flex justify-start items-center xl:gap-8 gap-2'>
      <img src="footer-icon1.png" alt="telephone" className="h-12 xl:ml-9 ml-5"/>
      <div>
            <p className="text-white text-sm">Phone Number</p>
            <p className="text-white text-sm font-semibold">+974 3118 1843</p>
          </div>
    </div>
  )
}

export default footerCard1
