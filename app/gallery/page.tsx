"use client"

import React from 'react'
import Header from '../components/Header'
import { generalMedium, generalSemiBold } from '../font'
import { useTheme } from '../components/theme-provider'
import Image from 'next/image'
import GreatWithMilo from '@/app/assests/images/greatMilo.jpg'
import BrandCommAwardSVG from '@/app/assests/images/BRANDCOMAWARDS.png'
import Chairman from '@/app/assests/images/great-chilling.jpg'
import Native from '@/app/assests/images/great-standing.jpg'
import GreatWIthGlasses from '@/app/assests/images/great-with-glasses.jpg'
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
          className="w-full h-full object-cover"
        >
          <source src="/great-video-gallery.mp4" type="video/mp4" />
        </video>

        <div className="absolute bottom-0 right-[12px]  text-center ">
          <h2 className={` ${generalSemiBold.className} text-white text-clamp-mentorship-title `}>
            Gallery
          </h2>

        </div>



      </div>
      <div className='text-center mt-[1rem] px-[1rem] lg:mt-[2.375rem]'>
        <p className={`${generalMedium.className} text-clamp-gallery-text ${theme === "light" ? 'text-dark' : 'text-white'}`}>
          Explore the impactful campaigns and projects crafted by Great Chisom Anosike. From large-scale product activations to immersive brand experiences, each picture tells a story of innovation, strategy, and measurable success.
        </p>
      </div>
    <div className='w-full lg:flex mt-[1.25rem] lg:justify-center lg:items-center lg:mt-[2.5rem]'>
    <div className='flex flex-col gap-[1rem] px-[1rem] lg:flex lg:flex-col w-full lg:max-w-[1252px] lg:gap-[1.25rem]'>
       
       <div className='gap-[1rem] flex flex-col lg:flex lg:flex-row lg:gap-[1.25rem]'>
       <div className="relative  group   ">
       <Image
         src={BrandCommAwardSVG}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
         quality={100}
       />
            </div>
  

      <div className="relative  group   ">
      <Image
         src={Chairman}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
         quality={100}
       />
      </div>
<div className="relative  group">
  
<Image
         src={GreatWithMilo}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
       />
</div>
       </div>

      <div className='gap-[1rem] flex flex-col lg:flex lg:flex-row'>
      <div className="relative  group">
      <Image
         src={Native}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
       />

      </div>
     <div  className="relative  group">
     <Image
         src={GreatWIthGlasses}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
       />
     </div>

      <div className="relative  group">
      <Image
         src={GreatAway}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
       />
      </div>
      </div>
       <div className='gap-[1rem] flex flex-col lg:flex lg:flex-row'>
       <div className="relative  group">
       <Image
         src={Cutest}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
       />
       </div>
      <div  className="relative  group">
      <Image
         src={GreatWithLife}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
       />
      </div>
      <div className="relative  group">
      <Image
         src={GreatSmile}
         className="w-[398px] lg:w-[403px] object-cover transition-transform duration-500 group-hover:scale-105"
         alt="email icon"
       />
      </div>
       </div>
     </div>
    </div>

  <div className='mt-[1.25rem] px-[1rem] lg:w-full lg:flex lg:justify-center lg:items-center'>
  <div className='w-full lg:max-w-[1252px] object-cover transition-transform duration-500 group-hover:scale-105'>
  <Footer />
  </div>
  </div>
    </div>
  )
}

export default page
