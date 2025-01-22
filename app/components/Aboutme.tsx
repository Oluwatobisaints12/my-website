
import React, { ForwardedRef, forwardRef } from 'react'
import { generalSemiBold, helvetica } from '../font';
import AboutmeImg from '@/app/assests/images/aboutme-image.jpg'
import Image from 'next/image';
import { useTheme } from './theme-provider';

const Aboutme = forwardRef<HTMLDivElement, {}>((props, ref: ForwardedRef<HTMLDivElement>)=> {
    const { theme } = useTheme();
    return (
        <div ref={ref} className='flex flex-col mt-[5rem] md:flex md:flex-row md:w-full md:justify-between md:max-w-[725px] md:items-center lg:flex lg:flex-row  lg:items-center lg:justify-between lg:max-w-[1256px] lg:w-full'>
        <div className='w-full order-1 md:order-2 lg:order-2 md:w-full md:max-w-[400px] lg:max-w-[692px]'>
        <h1 className={`${generalSemiBold.className} text-clamp-aboutme-text text-[1rem] text-[2.5rem] lg:text-[4rem]`}>About Me</h1>
            <p className={`     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 ${helvetica.className} text-clamp-md-aboutme-text md:text-[12px] lg:text-[1.25rem]`}>With a strong background in event marketing, client and stakeholder management, and strategic brand development, I excel at creating customized marketing campaigns that amplify brand visibility and drive measurable growth. My expertise spans diverse industries, including food and beverage, technology, home care, and personal care, where I have consistently delivered impactful results.</p>
            <div className='flex flex-col mt-[1.25rem]'>
                <h1 className={`${generalSemiBold.className}  lg:text-[2rem]`}>Core Skills</h1>
                <ul className='list-disc list-inside marker:text-[#D0D5DD] gap-[0.625rem] ] lg:mt-[20px]  grid grid-cols-1 text-[1rem] lg:text-[18px] md:text-[10px] md:grid-cols-2 lg:grid-cols-2'>
                    <li className={`     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 ${helvetica.className} `}>Client Relationship & Account Management</li>
                    <li className={`     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 ${helvetica.className} `}>Business Development & Market Penetration</li>

                    <li className={`     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 ${helvetica.className} `}>Strategic Marketing & Brand Development</li>

                    <li className={`     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 ${helvetica.className} `}>Digital & B2B Marketing</li>
                    <li className={`     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 ${helvetica.className} `}>Data Management & Analysis</li>
                    <li className={`     ${theme === "light" ? 'text-custom-dark' : 'text-custom-light'}
 ${helvetica.className} `}>Cross-functional Team Leadership</li>
                </ul>
            </div>
        </div>
            <div className='order-2 md:order-1 lg:order-1 mt-[2.5rem] md:mt-0 lg:order-1'>

                <Image
                    src={AboutmeImg}
                    alt="Description"

                    className="w-[398px] rounded-[1.35rem] md:w-[308px] lg:w-[532px]" // Mobile: 200px, Tablet: 400px, Desktop: 600px
                />
            </div>
        </div>
    )
})

export default Aboutme
