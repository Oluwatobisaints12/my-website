"use client"

import React, { ForwardedRef, forwardRef } from 'react'
import Image from 'next/image'
import EmailSVG from '@/app/assests/images/mail.svg'
import PhoneSVG from '@/app/assests/images/phone.svg'
import { generalMedium, generalSemiBold, helvetica } from '../font'
import { useTheme } from './theme-provider';

const MentorshipContact = forwardRef<HTMLDivElement, {}>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const { theme } = useTheme();
  return (
    <div ref={ref} className='lg:max-w-[600px] w-ful lg:w-full' >
      <div className="flex flex-col mt-[5rem] md:mt-0 lg:max-w-[893px] lg:w-full" >
        {/* Header */}
        <h1 className={`text-clamp-header-text ${generalSemiBold.className}`}>
          Contact
        </h1>


        {/* Email Section */}
        <div className="flex gap-[20px] mt-[20px]">
          <div className="gap-[11px] flex items-center">
          <div className="w-[15px] lg:w-[24px]">
              <EmailSVG />
            </div>
            <p
              className={`    ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}

${generalMedium.className}    text-[1rem] md:text-[1rem]
 lg:text-[1.75rem]  `}>
              Email
            </p>
          </div>
          <p
            className={` text-white bg-[#1C1B1B] py-[8px] px-[8px] rounded-[34px] ${helvetica.className}    text-[1rem] md:text-[1rem]
 lg:text-[1.75rem] lg:px-[20px] lg:py-[12px] `}>
            messagegreatanosike@gmail.com
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

${generalMedium.className}    text-[1rem] md:text-[1rem]
 lg:text-[1.75rem] `}>
              Phone
            </p>
          </div>
          <p
            className={`text-white bg-[#1C1B1B] py-[8px] px-[8px] rounded-[34px] ${helvetica.className}    text-[1rem] md:text-[1rem]
 lg:text-[1.75rem] lg:px-[20px] lg:py-[12px] `}>
            +234 813 663 4633
          </p>
        </div>
      </div>
    </div>
  );
});

export default MentorshipContact;
