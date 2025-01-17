"use client"
import { generalSemiBold, helvetica, helveticaBold } from '@/app/font'
import { useTheme } from '../theme-provider';
import React from 'react'
import './GroupCard.css'
const GroupCard = () => {
  const { theme } = useTheme()
  return (
    <div className='mt-[2.5rem] flex  lg:justify-center lg:items-center lg:mt-[8.4375rem]'>
      <div className='w-full flex flex-col gap-[12px] lg:justify-between lg:flex-row lg:max-w-[1262px]'>
        <div className='border-[#D0D5DD] rounded-[12px] border py-[1.75rem] px-[1rem] w-full lg:max-w-[616px]'>
          <h1 className={` ${generalSemiBold.className} ${theme === "light" ? 'text-black' : 'text-white'} text-clamp-card-header`}>What You`ll Learn</h1>
          <nav className='gap-[1rem] flex flex-col'>
            <li className={` mt-[1.2rem] text-clamp-card-text marker:text-current marker:mr-0 ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Crafting innovative marketing strategies that deliver measurable results</li>
            <li className={` text-clamp-card-text ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Building and managing strong client relationships</li>
            <li className={` text-clamp-card-text ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Navigating event marketing and large-scale activations</li>
            <li className={` text-clamp-card-text ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Utilizing data and insights to drive decision-making</li>
            <li className={` text-clamp-card-text ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Developing a strong personal brand in the marketing field</li>

          </nav>
        </div>

        <div className='border-[#D0D5DD] rounded-[12px] border py-[2.7rem] px-[1rem] w-full lg:max-w-[616px]'>
          <h1 className={` ${generalSemiBold.className} ${theme === "light" ? 'text-black' : 'text-white'} text-clamp-card-header`}>How It Works</h1>
          <nav className='gap-[1rem] flex flex-col'>
            <li className={` mt-[1.2rem] text-clamp-card-text marker:text-current marker:mr-0 ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>One-on-One Sessions: <span className={` ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Dedicated mentoring tailored to your needs, goals, and career aspirations.</span></li>
            <li className={` text-clamp-card-text ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Workshops and Webinars: <span className={` ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Group learning sessions focused on key marketing and branding skills.</span></li>
            <li className={` text-clamp-card-text ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Continuous Support: <span className={` ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Access to resources, feedback, and ongoing advice as you implement what you learn. </span></li>


          </nav>
        </div>
      </div>

    </div>
  )
}

export default GroupCard
