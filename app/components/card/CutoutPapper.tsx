import React, { useRef } from 'react'

import MobileHorizonLine from '@/app/assests/images/vector-mobile.png'
import DesktopHorizonLine from '@/app/assests/images/horizontal-bg-line.png'
import Image from 'next/image'
import TypeWriterEffect from 'react-typewriter-effect'
import { generalSemiBold, helvetica } from '@/app/font'
const CutoutPapper = () => {
    const myAppRef = useRef(null);
  return (
    <div className="positive relative mt-[5rem] flex just-center items-center w-full max-w-[1383px]">
    {/* Image */}
    <Image
      src={MobileHorizonLine}
      alt="Mobile Horizon Line displaying Great Anosike's branding"
      className="block md:hidden lg:hidden"
      priority
    />


    <Image
      src={DesktopHorizonLine}
      alt="Mobile Horizon Line displaying Great Anosike's branding"
      className="hidden md:flex lg:flex "
      priority
    />

    {/* Overlay Text */}
    <div className="absolute  top-0 left-0 flex flex-col items-center justify-center h-full w-full text-center ">
      <div ref={myAppRef} className="absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full text-center px-[0.75rem] lg:px-[3.5rem]">
        <h1 className={`${generalSemiBold.className} text-[1.5rem] md:text-[24px] text-white lg:text-[2.5rem]`}>WELCOME TO THE OFFICIAL WEBSITE OF GREAT ANOSIKE</h1>
     
        <p className={` text-white text-[0.75rem] md:text-[13px] lg:text-[1.5rem] ${helvetica.className} `}>
  Discover Great Anosike's journey, achievements, and standout projects. 
  <br />
  Stay tuned for the latest updates and insights into his professional milestones and personal growth.
  <br />
  Dive in to learn more about Great Anosike and his inspiring path.
</p>

      </div>

    </div>


  </div>
  )
}

export default CutoutPapper
