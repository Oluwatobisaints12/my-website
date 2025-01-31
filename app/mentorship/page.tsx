"use client"

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import MentorshipImage from '@/app/assests/images/mentorship-dashboard-image.jpg'
import { generalMedium, generalSemiBold, helvetica } from '../font'
import HorizontalMentorshipMobile from '@/app/assests/images/Vector (1).png'
import HorizontalMentorship from '@/app/assests/images/horizontalline-memtorship.png'
import HorizonMentorship from '@/app/assests/images/great-mentor.png'
import Slider from '../components/card/Slider'
import GroupCard from '../components/card/GroupCard'
import MentorshipText from '../components/card/MentorshipText'
import ContactUs from '../components/card/ContactUs'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import GreatAnosike from '@/app/assests/images/great_anosike.jpg'
import MentorshipContact from '../components/MentorshipContact'
import TypeWriterEffect from 'react-typewriter-effect';
import Header from '../components/Header'
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Loading from '@/app/assests/images/loading.gif'

// import GreatVidoClip  '@/public/great_video.mp4';
interface scrollIntoView {
  behavior?: "auto" | "smooth"; // Correct spelling
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
}
const page = () => {
  const aboutContact = useRef<HTMLDivElement>(null);
  
  const abouMeRef = useRef<HTMLDivElement>(null);

  const aboutWork = useRef<HTMLDivElement>(null);
  const aboutTestimonials = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  

  useEffect(() => {
    setIsLoading(true);

    // Simulate a short delay before hiding the loader (adjust as needed)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust delay time

    return () => clearTimeout(timer);
  }, [pathname, searchParams]); // Run

  const handleNavigateToContact =()=>{
    if(aboutContact.current) {
      aboutContact.current.scrollIntoView({behavior: "smooth"})
    }
  }
  const handleAboutme =()=> {
    if(abouMeRef.current){
      abouMeRef.current.scrollIntoView({behavior: "smooth"})

    } 
   }
  const handleNavigateToWork =()=>{
    if(aboutWork.current){
      aboutWork.current.scrollIntoView({behavior: "smooth"})

    }
  }

  const handleScrollToTestimonials =()=>{
    if(aboutTestimonials.current){
      aboutTestimonials.current.scrollIntoView({behavior: "smooth"})

    }
  }
  

  return (
    <div className=' lg:flex lg:flex-col '>
      <div className='px-[1rem]'>
      <Header  
      handleClick={handleNavigateToContact}
      onButtonClick={handleAboutme} 
      buttonClick={handleNavigateToWork} 
      handleButtonClick={handleScrollToTestimonials}
      
      />
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Image 
            alt="loading icon"
            src={Loading}
            width={50} // Ensure you specify width and height
            height={50}
          />
        </div>
      ) : (
      <div>
      <div className="relative   flex flex-col mt-[4rem] ">
      <video
    autoPlay
    loop
    muted
    className="w-full h-full object-cover "
     playsInline
      preload="metadata"
   
  >
    <source src="/great-new-mentor-video.mp4" type="video/mp4" />
    {/* <source src="/great-new-mentor-video.webm" type="video/webm" /> */}
  </video>

        <div className="absolute top-0 left-0 flex flex-col items-center w-full mt-[8px]  px-[0.75rem]   text-center  lg:px-[7rem]">
          <h2 className={` ${generalSemiBold.className} text-white mt-[8px] text-[1.25rem] md:text-[2rem] md:mt-[2.5625rem] lg:text-[3.5rem] lg:mt-[4rem]`}>
            Mentorship with Great Chisom Anosike
          </h2>
          <p className={`text-[12px] md:text-[0.75rem] lg:text-[1.25rem]  text-white md-w-full md:max-w-[675px] lg:w-full lg:max-w-[1166px]  ${generalMedium.className} `}>
            Great Chisom Anosike is passionate about sharing his knowledge and helping aspiring marketers, brand strategists, and event managers excel in their careers. With over five years of experience driving impactful campaigns and building successful brands across diverse industries, Great offers valuable insights and guidance to help you thrive in a competitive market.    </p>
        </div>


      </div>
      <div className='position relative mt-[-2rem] '>
        <Image
          src={HorizontalMentorshipMobile}
          alt="mentorship dashboard image"
          className="flex w-full h-[144px] md:hidden lg:hidden"
        />

<Image
          src={HorizonMentorship}
          alt="mentorship dashboard image"
          className="hidden md:w-full md:flex lg:hidden"
        />
        <Image
          src={HorizontalMentorship}
          alt="mentorship dashboard image"
          className=" hidden lg:block mt-[-3rem] md:w-full"
        />
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full text-center '>
          <h1 className={` text-[1.25rem] md:text-[2.25rem] lg:text-[4rem] ${generalSemiBold.className} text-white`}>
          Why Choose Mentorship with Great?

          
            </h1>

        </div>
      </div>
   
    <div className='px-[1rem]'>
    <Slider />
    

      <GroupCard />
      <div className='w-full md:flex md:justify-center md:items-center lg:flex lg:justify-center lg:items-center'>
      <MentorshipText />
      </div>
     
    <div className='  w-full md:flex  md:justify-center   lg:flex  lg:justify-center lg:items-center'>
  <div className='md:flex md:flex-row md:mt-[17px] w-full md:max-w-[726px] md:justify-between lg:flex lg:flex-row  w-full lg:max-w-[1262px] lg:justify-between'>
  <ContactUs />
  <MentorshipContact ref={aboutContact} />
  </div>
    </div>
      <div  className='w-full md:flex  md:justify-center md:items-center  lg:flex  lg:justify-center lg:items-center'>
      <Footer />
      </div>
    </div>
      </div>
      )}
    </div>
  )
}

export default page
