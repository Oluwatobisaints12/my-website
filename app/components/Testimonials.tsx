import React, { ForwardedRef, forwardRef } from 'react'
import CurvedCard from './card/CurvedCard'
import { generalSemiBold } from '../font'

const Testimonials = forwardRef<HTMLDivElement, {}>((props, ref: ForwardedRef<HTMLDivElement>)=> {
  return (
    <div ref={ref} className='mt-[5rem] lg:max-w-[1256px] lg:w-full'>
      <h1 className={`text-clamp-header-text ${generalSemiBold.className} md:text-center lg:text-center`}>Testimonials</h1>
      <CurvedCard />
    </div>
  )
})

export default Testimonials
