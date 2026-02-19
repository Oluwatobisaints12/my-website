"use client"

import { generalSemiBold, helvetica } from '@/app/font'

import React from 'react'
import { useTheme } from '../theme-provider'

const MentorshipText = () => {
    const {theme} = useTheme()
  return (
  <div className='w-full md:w-full md:max-w-[726px] lg:max-w-[1262px] lg:mt-[8rem] '>
      <div className='mt-[2.5rem]'>
      <h1 className={`${generalSemiBold.className} text-[1.75rem] md:text-[2.25rem] lg:text-[3.5rem] ${theme === "light" ? 'text-black' : 'text-white'}`}>Mentorship with Great Chisom Anosike</h1>
      <p className={` ${helvetica.className} text-[18px] md:text-[12px] lg:text-[1.25rem] ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'  } mt-[4px]` }>Fill out the form below to apply for personalized mentorship with Great Chisom Anosike. Let’s work together to unlock your potential and achieve your career goals.</p>
    </div>
  </div>
  )
}

export default MentorshipText
