"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import MentorshipImage from '@/app/assests/images/mentorship-dashboard-image.jpg'
import { generalMedium, generalSemiBold, helvetica } from '../font'
import HorizontalMentorshipMobile from '@/app/assests/images/horizontalline-mobile-mentorship.png'
import HorizontalMentorship from '@/app/assests/images/horizontalline-memtorship.png'

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

// import GreatVidoClip  '@/public/great_video.mp4';

const page = () => {
  const aboutContact = useRef(null)

  const handleNavigateToContact =()=>{
    if(aboutContact.current) {
      aboutContact.current.scrollIntoView({behaviour: "smooth"})
    }
  }

  return (
    <div className='py-[1rem] px-[1rem] lg:flex lg:flex-col'>
      <Header  handleClick={handleNavigateToContact}/>
      <div className="relative   flex flex-col mt-[1rem]">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src="/great_video.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-0 left-0 flex flex-col items-center w-full px-[0.75rem]  text-center ">
          <h2 className={` ${generalSemiBold.className} text-white text-clamp-mentorship-title `}>
            Mentorship with Great Chisom Anosike
          </h2>
          <p className={`text-clamp-mentorship-header text-white  ${generalMedium.className} `}>
            Great Chisom Anosike is passionate about sharing his knowledge and helping aspiring marketers, brand strategists, and event managers excel in their careers. With over five years of experience driving impactful campaigns and building successful brands across diverse industries, Great offers valuable insights and guidance to help you thrive in a competitive market.    </p>
        </div>


      </div>
      <div className='position relative mt-[-2rem]'>
        <Image
          src={HorizontalMentorshipMobile}
          alt="mentorship dashboard image"
          className="lg:hidden"
        />

        <Image
          src={HorizontalMentorship}
          alt="mentorship dashboard image"
          className=" hidden lg:block mt-[-3rem] w-full"
        />
        <div className='absolute top-0 left-0 flex flex-col items-center justify-center h-full w-full text-center '>
          <h1 className={` text-clamp-mentorship-absolute-text ${generalSemiBold.className} text-white`}>
          <TypeWriterEffect
    textStyle={{
      fontFamily: generalSemiBold,
      fontWeight: '600',
       // Assuming generalSemiBold maps to a font weight
      color: 'white', // Matches text-white
      // fontSize: 'clamp(1.6rem, 4vw, 3rem)' // Add your specific text-clamp-md-header value here
      textAlign: 'center'
    }}
    startDelay={2000}
        cursorColor="white"
        multiText={[
          "Why Choose Mentorship with Great?",
          "Why Choose Mentorship with Great?",
       
        ]}
        multiTextDelay={1000}
        typeSpeed={100}
        multiTextLoop

  />
          
            </h1>

        </div>
      </div>
   
        <Slider />
    

      <GroupCard />
      <div className='w-full lg:flex lg:justify-center lg:items-center'>
      <MentorshipText />
      </div>
     
    <div className='  w-full  lg:flex  lg:justify-center lg:items-center'>
  <div className='lg:flex lg:flex-row  w-full lg:max-w-[1262px] lg:justify-between'>
  <ContactUs />
  <MentorshipContact ref={aboutContact} />
  </div>
    </div>
      <div  className='w-full  lg:flex  lg:justify-center lg:items-center'>
      <Footer />
      </div>

    </div>
  )
}

export default page
