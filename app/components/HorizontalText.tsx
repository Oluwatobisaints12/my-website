import React, {useEffect} from 'react'
import Image from 'next/image'
import HorizontalImage from '@/app/assests/images/horizontal-block.png'
import WorkApproachImg from '@/app/assests/images/work-approach-bline.png'
import { generalSemiBold, helvetica, helveticaBold } from '../font'
import HorizonTab from '@/app/assests/images/horizontal-tab-view.png'
import Aos from 'aos';
import 'aos/dist/aos.css'

const HorizontalText = ({handleClick}: any) => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in ms
      once: true, // Ensures animation happens only once
    });
  }, []);
  return (
    <div className="mt-[5rem] relative w-full max-w-[1383px]" data-aos="fade-down" data-aos-anchor-placement="top-center">
    {/* Image for mobile view */}
    <Image
      src={HorizontalImage}
     
      alt="mobile yellow background"
      className="block w-full md:hidden lg:hidden relative"
    />
    
    {/* Image for large screens */}
    <Image
      src={WorkApproachImg}
    
      alt="desktop yellow background"
      className="hidden md:hidden lg:block relative"
      priority
    />
     <Image
      src={HorizonTab}
    
      alt="desktop yellow background"
      className="hidden md:flex relative lg:hidden"
      priority
    />
  
    {/* Overlay content */}
    <div className="absolute top-0 left-0 flex flex-col items-center mt-[10px] justify-center h-full w-full text-center">
      <h1
        className={`${generalSemiBold.className} text-[2.5rem] text-white md:text-[2rem] lg:text-[4.375rem]`}>
        Work Approach
      </h1>
      <p className={`${helvetica.className}  text-white text-[1.25rem] md:text-[1.75rem] lg:text-[2.75rem]`}>
        ”Know how to get stuff done” - Barack Obama
      </p>
      <button
      onClick={handleClick}
  className={`bg-[#0D0D0D] py-[12px] px-[34px] rounded-[8px] text-white text-[1.5rem] mt-[10px] 
    hover:opacity-75 transition-colors transition-opacity duration-300  md:py-[6px] md:px-[25px]
    ${helveticaBold.className}`}>
  Get in Touch
</button>

    </div>
  </div>
  
  )
}

export default HorizontalText
