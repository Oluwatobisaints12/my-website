import React, {useEffect} from 'react'
import Image from 'next/image'
import HorizontalImage from '@/app/assests/images/horizontal-block.png'
import WorkApproachImg from '@/app/assests/images/work-approach-bline.png'
import { generalSemiBold, helvetica, helveticaBold } from '../font'
import HorizonTab from '@/app/assests/images/horizontal-bg-line.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import CustomButton from './ui/buttons'

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
    />
     <Image
      src={HorizonTab}
    
      alt="desktop yellow background"
      className="hidden md:flex relative lg:hidden"
    />
  
    {/* Overlay content */}
    <div className="absolute top-0 left-0 flex flex-col items-center mt-[10px] justify-center h-full w-full text-center">
      <h1
        className={`${generalSemiBold.className} text-[clamp(2rem,5vw,4.375rem)] text-white`}>
        Work Approach
      </h1>
      <p className={`${helvetica.className}  text-white text-[clamp(1.25rem,3vw,2.75rem)]`}>
        ”Know how to get stuff done” - Barack Obama
      </p>
      <CustomButton
      onClick={handleClick}
      variant="dark"
      size="wide"
      className={`text-[clamp(1.125rem,2vw,1.5rem)] mt-[5px] ${helveticaBold.className}`}>
  Get in Touch
</CustomButton>

    </div>
  </div>
  
  )
}

export default HorizontalText
