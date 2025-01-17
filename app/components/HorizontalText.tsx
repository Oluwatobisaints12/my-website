import React from 'react'
import Image from 'next/image'
import HorizontalImage from '@/app/assests/images/horizontal-block.png'
import WorkApproachImg from '@/app/assests/images/work-approach-bline.png'
import { generalSemiBold, helvetica, helveticaBold } from '../font'

const HorizontalText = ({handleClick}: any) => {
  return (
    <div className="mt-[5rem] relative w-full max-w-[1383px]">
    {/* Image for mobile view */}
    <Image
      src={HorizontalImage}
     
      alt="mobile yellow background"
      className="block w-full lg:hidden relative"
    />
    
    {/* Image for large screens */}
    <Image
      src={WorkApproachImg}
    
      alt="desktop yellow background"
      className="hidden lg:block relative"
      priority
    />
  
    {/* Overlay content */}
    <div className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full text-center">
      <h1
        className={`${generalSemiBold.className} text-clamp-header-horizo-text text-white`}>
        Work Approach
      </h1>
      <p className={`${helvetica.className} text-clamp-horizon-text text-white`}>
        ”Know how to get stuff done” - Barack Obama
      </p>
      <button
      onClick={handleClick}
  className={`bg-[#0D0D0D] py-[12px] px-[34px] rounded-[8px] text-white text-[1.5rem] mt-[10px] 
    hover:opacity-75 transition-colors transition-opacity duration-300 
    ${helveticaBold.className}`}>
  Get in Touch
</button>

    </div>
  </div>
  
  )
}

export default HorizontalText
