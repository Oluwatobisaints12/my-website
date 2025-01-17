"use client"

import React, { forwardRef } from 'react'
import Image from 'next/image'
import EmailSVG from '@/app/assests/images/mail.svg'
import PhoneSVG from '@/app/assests/images/phone.svg'
import { generalMedium, generalSemiBold, helvetica } from '../font'
import { useTheme } from './theme-provider';

const Contact =  forwardRef((props, ref) => {
  const { theme } = useTheme();
  return (
    <div ref={ref} className='lg:max-w-[1256px] lg:w-full'>
      <div className="flex flex-col mt-[5rem] lg:max-w-[893px] lg:w-full">
        {/* Header */}
        <h1 className={`text-clamp-header-text ${generalSemiBold.className}`}>
          Contact
        </h1>
        {/* Description */}
        <p
          className={`      ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 text-clamp-contact-para-text ${helvetica.className} `}>
          Ready to elevate your brand or discuss your next big campaign? Let’s
          connect and make an impact together.
        </p>
        <p
          className={`    ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 text-clamp-contact-para-text ${helvetica.className}  mt-[1rem]`}>
          I’m here to listen, strategize, and craft marketing solutions that drive
          results.
        </p>

        {/* Email Section */}
        <div className="flex gap-[20px] mt-[20px]">
          <div className="gap-[11px] flex items-center">
            <div className="w-[15px] lg:w-[24px]">
              <EmailSVG />
            </div>

            <p
              className={`    ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}

${generalMedium.className} text-clamp-contact-para-text `}>
              Email
            </p>
          </div>
          <p
            className={` text-white bg-[#1C1B1B] py-[8px] px-[8px] rounded-[34px] ${helvetica.className} text-clamp-contact-para-text lg:px-[28px] lg:py-[12px]`}>
            greatanosike@gmail.com
          </p>
        </div>

        {/* Phone Section */}
        <div className="flex gap-[20px] mt-[20px] mb-[1rem]">
          <div className="gap-[11px] flex items-center">
            <div className="w-[15px] lg:w-[24px]">
              <PhoneSVG />
            </div>
            <p
              className={`     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}

${generalMedium.className} text-clamp-contact-para-text `}>
              Phone
            </p>
          </div>
          <p
            className={`text-white bg-[#1C1B1B] py-[8px] px-[8px] rounded-[34px] ${helvetica.className} text-clamp-contact-para-text lg:px-[28px] lg:py-[12px]`}>
            +234 813 663 4633
          </p>
        </div>
      </div>
    </div>
  );
});

export default Contact;
