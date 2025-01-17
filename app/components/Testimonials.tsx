import React, { forwardRef } from 'react'
import CurvedCard from './card/CurvedCard'
import { generalSemiBold } from '../font'

const Testimonials = forwardRef((props, ref)=> {
  return (
    <div ref={ref} className='mt-[5rem] lg:max-w-[1256px] lg:w-full'>
      <h1 className={`text-clamp-header-text ${generalSemiBold.className} lg:text-center`}>Testimonials</h1>
      <CurvedCard />
    </div>
  )
})

export default Testimonials
