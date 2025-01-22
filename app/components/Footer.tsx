import React from 'react'
import { helvetica, vanillaText } from '../font'
import FacebookIcon from '@/app/assests/images/facebook-icon.svg'
import LinkedinIcon from '@/app/assests/images/linkedin-icon.svg'
import TwitterIcon from '@/app/assests/images/twitter-icon.svg'
import InstagramIcon from '@/app/assests/images/instagram-cion.svg'
import { Instagram } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='w-full md:w-full md:max-w-[726px] md:mt-[17px] lg:max-w-[1256px] lg:w-full lg:mt-[2.5rem]'>
     <div className="border-t border-red w-full h-[10px]"></div>

      <div className='flex items-center justify-between lg:mt-[1.5rem]'>
      <h1 className={`${vanillaText.className} text-clamp-footer-left-text`}>
          Great Anosike
        </h1>
        <div className='gap-[8px] flex lg:gap-[2.5rem]'>
        <a 
  className={`cursor-pointer text-clamp-footer-text ${helvetica.className} text-[#616161] hover:text-[#F57F17] transition-colors duration-300`} 
  href="https://www.instagram.com/great.anosike/profilecard/?igsh=cHh1YXI3NWZzeXBo"
>
  <Instagram />
</a>
        <a className={`cursor-pointer text-clamp-footer-text ${helvetica.className} text-[#616161] hover:text-[#F57F17] transition-colors duration-300`} href="https://www.facebook.com/share/186dJFDbC6/?mibextid=qi2Omg"><Facebook /></a>
        <a className={`cursor-pointer text-clamp-footer-text ${helvetica.className} text-[#616161] hover:text-[#F57F17] transition-colors duration-300`} href="https://www.linkedin.com/in/great-anosike"><LinkedIn /></a>
      </div>
      </div>
    
    </div>
  )
}

export default Footer
