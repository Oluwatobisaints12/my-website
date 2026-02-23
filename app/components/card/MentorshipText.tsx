"use client"

import { generalSemiBold, helvetica } from '@/app/font'

import React from 'react'
import { useTheme } from '../theme-provider'

const MentorshipText = () => {
    const {theme} = useTheme()
  return (
  <div className='w-full mt-[2.5rem] md:w-full md:max-w-[726px] lg:max-w-[1262px] lg:mt-[7rem] '>
      <div className=''>
      <h1 className={`${generalSemiBold.className} text-[clamp(1.75rem,3.5vw,3.5rem)] ${theme === "light" ? 'text-black' : 'text-white'}`}>Mentorship with Great Chisom Anosike</h1>
      <p className={` ${helvetica.className} text-[clamp(0.75rem,1.2vw,1.25rem)] ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'  } mt-[4px]` }>Fill out the form below to apply for personalized mentorship with Great Chisom Anosike. Let’s work together to unlock your potential and achieve your career goals.</p>
    </div>
  </div>
  )
}

export default MentorshipText
