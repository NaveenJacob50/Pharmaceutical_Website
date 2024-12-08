import React from 'react'
import IngredientCard1 from './ingredientCard1'
import IngredientCard2 from './ingredientCard2'
import IngredientCard3 from './ingredientCard3'
import IngredientCard4 from './ingredientCard4'
import IngredientCard5 from './ingredientCard5'
import IngredientCard6 from './ingredientCard6'

const ingredients = () => {
  return (
    <div>
      <div className='flex xl:gap-8 gap-4 justify-center mt-20 flex-wrap'> {/*upper half*/}
        <div className='sm:w-screen lg:w-auto flex flex-col items-center lg:inline'>
            <p style={{color:'#17414f'}} className='text-xs font-semibold'>INGREDIENTS</p>
            <h1 style={{color:'#17414F'}} className='font-bold sm:text-4xl text-3xl mt-3'>Better Ingredients</h1>
            <p className='text-xs text-gray-500 mt-6 text-center'>Only the best when you choose products offered on our platform - high quality</p>
            <p className='text-xs text-gray-500 mt-1'>ingredients for high quality products!</p>
        </div>
        <IngredientCard1/>
        <IngredientCard2/>
      </div>
      <div className='flex gap-8 justify-center mt-7 flex-wrap'> {/*lower half*/}
        <IngredientCard3/>
        <IngredientCard4/>
        <IngredientCard5/>
        <IngredientCard6/>
      </div>
    </div>
  )
}

export default ingredients
