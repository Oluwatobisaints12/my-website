
"use client"
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import './globals.css'

import { AppProps } from "next/app";
import { useEffect } from "react";
import MainPage from "./components/MainPage";
import Aboutme from "./components/Aboutme";
import InfiniteScrolling from "./components/InfiniteScrolling";
import ProjectHighlight from "./components/ProjectHighlight";
import Testimonials from "./components/Testimonials";
import HorizontalText from "./components/HorizontalText";
import { useRef } from "react";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import CutoutPapper from "./components/card/CutoutPapper";
interface ScrollIntoViewOptions {
  behavior?: "auto" | "smooth"; // Correct spelling
  block?: "start" | "center" | "end" | "nearest";
  inline?: "start" | "center" | "end" | "nearest";
}

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const abouMeRef = useRef<HTMLDivElement>(null);

  const aboutWork = useRef<HTMLDivElement>(null);

  const aboutContact = useRef<HTMLDivElement>(null);

  const aboutTestimonials= useRef<HTMLDivElement>(null);

  const handleScrollToAbout =()=> {
    if(aboutRef.current){
    aboutRef.current.scrollIntoView({behavior: "smooth"})
  }}

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
  const handleScrollToContact =()=>{
    if(aboutContact.current){
      aboutContact.current.scrollIntoView({behavior: "smooth"})

    }
  }
  
  const handleScrollToTestimonials =()=>{
    if(aboutTestimonials.current){
      aboutTestimonials.current.scrollIntoView({behavior: "smooth"})

    }
  }
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', 'dark');
  // }, []);
  return (
<div>
  {/* Container for padded content */}
  <div className="px-[1rem] flex flex-col justify-center items-center overflow-hidden">
    <Header  
      onButtonClick={handleAboutme} 
      buttonClick={handleNavigateToWork} 
      handleClick={handleScrollToContact} 
      handleButtonClick={handleScrollToTestimonials}
    />
    <MainPage handleClick={handleScrollToContact} />
  </div>

  {/* Full-width container for CutoutPapper */}
  <div className="w-full flex justify-center items-center">
    <CutoutPapper />
  </div>

  {/* Continue with padded content */}
  <div className="px-[1rem] flex flex-col justify-center items-center">
    <Aboutme ref={abouMeRef} />
    <InfiniteScrolling ref={aboutWork} />
    <ProjectHighlight />
    <Testimonials ref={aboutTestimonials} />
    </div>
    <div className="w-full flex justify-center items-center">
    <HorizontalText handleClick={handleScrollToContact} />

    </div>

    <div className="px-[1rem] flex flex-col justify-center items-center">
    <Contact ref={aboutContact} />
    <Footer />
  </div>
</div>


  );
}