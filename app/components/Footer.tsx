import React from 'react'
import { helvetica, vanillaText } from '../font'

const Footer = () => {
  return (
    <div className='w-full lg:max-w-[1256px] lg:w-full lg:mt-[2.5rem]'>
     <div className="border-t border-red w-full h-[10px]"></div>

      <div className='flex items-center justify-between lg:mt-[1.5rem]'>
      <h1 className={`${vanillaText.className} text-clamp-footer-left-text`}>
          Great Anosike
        </h1>
        <div className='gap-[8px] flex lg:gap-[2.5rem]'>
        <a 
  className={`cursor-pointer text-clamp-footer-text ${helvetica.className} text-[#616161] hover:text-[#F57F17] transition-colors duration-300`} 
  href="https://www.instagram.com/"
>
  INSTAGRAM
</a>
        <a className={`cursor-pointer text-clamp-footer-text ${helvetica.className} text-[#616161] hover:text-[#F57F17] transition-colors duration-300`} href="https://x.com/?&">X (TWITTER)</a>
        <a className={`cursor-pointer text-clamp-footer-text ${helvetica.className} text-[#616161] hover:text-[#F57F17] transition-colors duration-300`} href="https://www.linkedin.com/">LINKEDIN</a>
      </div>
      </div>
    
    </div>
  )
}

export default Footer
