"use client"

import React from 'react'
import Header from '../components/Header'
import { generalMedium, generalSemiBold } from '../font'
import { useTheme } from '../components/theme-provider'
import Image from 'next/image'
import GreatWithMilo from '@/app/assests/images/greatMilo.jpg'
import BrandCommAwardSVG from '@/app/assests/images/BRANDCOMAWARDS.png'
import Chairman from '@/app/assests/images/great-chilling.jpg'
import Native from '@/app/assests/images/IMG_9156 1.png'
import GreatWIthGlasses from '@/app/assests/images/WhatsApp Image 2025-01-13 at 11.28.18_d3d6502d 1.png'
import GreatAway from '@/app/assests/images/great-looksaway.png'
import Cutest from '@/app/assests/images/great-cutest.png'
import GreatWithLife from '@/app/assests/images/great-popping.png'
import GreatSmile from '@/app/assests/images/great-beat-chest.jpg'
import Footer from '../components/Footer'

const page = () => {
  const { theme } = useTheme()
  return (
    <div className=''>
      <Header />
      <div className="relative flex flex-col mt-[1rem]">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover mt-[1rem]"
          preload="metadata"
   
        >
          <source src="/great-new-gallery-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-0 right-[12px]  text-center ">
          <h2 className={` ${generalSemiBold.className} text-white text-clamp-mentorship-title `}>
            Gallery
          </h2>

        </div>



      </div>
      <div className='text-center mt-[1rem] px-[1rem] lg:mt-[2.375rem]'>
        <p className={`${generalMedium.className} text-[1.25rem] md:text-[1.875rem] lg:text-[3.175rem]  ${theme === "light" ? 'text-dark' : 'text-white'}`}>
          Explore the impactful campaigns and projects crafted by Great Chisom Anosike. From large-scale product activations to immersive brand experiences, each picture tells a story of innovation, strategy, and measurable success.
        </p>
      </div>
      <div className='w-full lg:flex mt-[1.25rem] md:mt-[1.5rem] md:w-full md:flex md:justify-center md:items-center lg:justify-center lg:items-center lg:mt-[2.5rem]'>
        <div className='flex flex-col gap-[1rem] px-[1rem] md:flex md:flex-col md:max-w-[730px] lg:flex lg:flex-col w-full lg:max-w-[1252px] lg:gap-[1.25rem]'>

          <div className='gap-[1rem] flex flex-col justify-center items-center md:flex md:flex-row lg:flex lg:flex-row lg:gap-[1.25rem]'>
            <div className="relative  group   ">
              <Image
                src={BrandCommAwardSVG}
                className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="Brand Communication Award"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />


            </div>


            <div className="relative  group   ">
              <Image
                src={Chairman}
                className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="email icon"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative  group">

              <Image
                src={GreatWithMilo}
                className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="email icon"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className='gap-[1rem] flex justify-center items-center flex-col md:flex md:flex-row lg:flex lg:flex-row'>
            <div className="relative  group">
              <Image
                src={Native}
                className="w-[398px] lg:w-[403px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="email icon"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

            </div>
            <div className="relative  group">
              <Image
                src={GreatWIthGlasses}
                className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="email icon"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="relative  group">
              <Image
                src={GreatAway}
                className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="email icon"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          <div className='gap-[1rem] justify-center items-center flex flex-col md:flex md:flex-row lg:flex lg:flex-row'>
            <div className="relative  group">
              <Image
                src={Cutest}
                className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="email icon"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative  group">
              <Image
                src={GreatWithLife}
                className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="email icon"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="relative  group">
              <Image
                src={GreatSmile}
                className="w-[398px] lg:h-[500px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
                alt="email icon"
                quality={75}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-[1.25rem] px-[1rem] md:w-full md:flex md:justify-center md:items-center lg:w-full lg:flex lg:justify-center lg:items-center'>
        <div className='w-full md:max-w-[730px] lg:max-w-[1252px] object-cover transition-transform duration-500 group-hover:scale-105'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default page
