"use client"
import { generalSemiBold, helvetica, helveticaBold } from '@/app/font'
import { useTheme } from '../theme-provider';
import React from 'react'
import './GroupCard.css'
const GroupCard = () => {
  const { theme } = useTheme()
  return (
    <div className='mt-[2.5rem] flex md:justify-center md:items-center  lg:justify-center lg:items-center lg:mt-[8.4375rem]'>
      <div className='w-full flex flex-col gap-[12px] md:w-full md:justify-between md:flex-row md:max-w-[726px] lg:justify-between lg:flex-row lg:max-w-[1262px]'>
        <div className='border-[#D0D5DD] rounded-[12px] px-[1rem] border py-[1.75rem]  w-full lg:max-w-[616px]'>
          <h1 className={` ${generalSemiBold.className} ${theme === "light" ? 'text-black' : 'text-white'} text-[1.25rem] ml-[1rem] md:text-[1.75rem] lg:text-[2.5rem]`}>What You`ll Learn</h1>
          <nav className='gap-[1rem] ml-[1rem] mr-[1rem] flex flex-col'>
            <li className={` mt-[1.2rem] text-[14px]  md:text-[12px] lg:text-[1.25rem] marker:text-current marker:mr-0 ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Crafting innovative marketing strategies that deliver measurable results</li>
            <li className={` text-[14px] md:text-[12px] lg:text-[1.25rem] ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Building and managing strong client relationships</li>
            <li className={` text-[14px] md:text-[12px] lg:text-[1.25rem] ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Navigating event marketing and large-scale activations</li>
            <li className={` text-[14px] md:text-[12px] lg:text-[1.25rem] ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Utilizing data and insights to drive decision-making</li>
            <li className={` text-[14px] md:text-[12px] lg:text-[1.25rem] ${helvetica.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Developing a strong personal brand in the marketing field</li>

          </nav>
        </div>

        <div className='border-[#D0D5DD] rounded-[12px] border py-[2.7rem] px-[1rem] w-full lg:max-w-[616px]'>
          <h1 className={` ${generalSemiBold.className} ${theme === "light" ? 'text-black' : 'text-white'} ml-[1rem] text-[1.25rem] md:text-[1.75rem] lg:text-[2.5rem]`}>How It Works</h1>
          <nav className='gap-[1rem] ml-[1rem] mr-[1rem] flex flex-col'>
            <li className={` mt-[1.2rem] text-[14px] md:text-[12px] lg:text-[1.25rem] marker:text-current marker:mr-0 ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>One-on-One Sessions: <span className={` ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Dedicated mentoring tailored to your needs, goals, and career aspirations.</span></li>
            <li className={` text-[14px] md:text-[12px] lg:text-[1.25rem] ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Workshops and Webinars: <span className={` ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Group learning sessions focused on key marketing and branding skills.</span></li>
            <li className={` text-[14px] md:text-[12px] lg:text-[1.25rem] ${helveticaBold.className} ${theme === "light" ? 'text-black' : 'text-white'}`}>Continuous Support: <span className={` ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'} ${helvetica.className}`}>Access to resources, feedback, and ongoing advice as you implement what you learn. </span></li>


          </nav>
        </div>
      </div>

    </div>
  )
}

export default GroupCard
