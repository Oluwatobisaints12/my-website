import React, { ForwardedRef, forwardRef } from 'react'
import CurvedCard from './card/CurvedCard'
import { generalSemiBold } from '../font'

const Testimonials = forwardRef<HTMLDivElement, { id: string }>((props, ref) => {
  return (
    <div ref={ref} id={props.id} className='mt-[5rem] pl-[8px]   md:w-full md:max-w-[725px]  lg:w-full lg:max-w-[1256px] '>
      <h1 className={`text-clamp-projecthighlight-text ${generalSemiBold.className} md:text-center lg:text-center`}>Testimonials</h1>
      <CurvedCard />
    </div>
  )
})

export default Testimonials
