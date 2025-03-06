
"use client"
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import './globals.css'

import { AppProps } from "next/app";
import { useEffect, useState } from "react";
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
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Loading from '@/app/assests/images/loading.gif'
import Image from "next/image";
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

  const router = useRouter()
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

 
useEffect(() => {
  // Check for section query params and scroll to the appropriate section
  const section = searchParams.get("section");

  setTimeout(() => {
    if (section === "about" && abouMeRef.current !== null) {
      abouMeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "work" && aboutWork.current !== null) {
      aboutWork.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "testimonial" && aboutTestimonials.current !== null) {
      aboutTestimonials.current.scrollIntoView({ behavior: "smooth" });
    }
  }, 200);
}, [searchParams]);

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
    <div className="pb-[1rem]">
      {/* ✅ Always render the Header */}
      {/* <div className="px-[1rem] flex flex-col justify-center items-center overflow-hidden">
        <Header  
          onButtonClick={handleAboutme} 
          buttonClick={handleNavigateToWork} 
          handleClick={handleScrollToContact} 
          handleButtonClick={handleScrollToTestimonials}
        />
      </div> */}
  
      {/* ✅ Show Loading Icon OR Content */}
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
          <div className="px-[1rem] flex flex-col justify-center items-center overflow-hidden">
            <MainPage handleClick={handleScrollToContact} />
          </div>
  
          {/* Full-width container for CutoutPapper */}
          <div className="w-full flex justify-center items-center">
            <CutoutPapper />
          </div>
  
          {/* Continue with padded content */}
          <div className="px-[1rem] flex flex-col w-full justify-center items-center">
            <Aboutme ref={abouMeRef} id="about" />
            {/* <InfiniteScrolling ref={aboutWork} id="work"/> */}
            <ProjectHighlight />
            <Testimonials ref={aboutTestimonials} id="testimonial"/>
          </div>
  
          <div className="w-full flex justify-center items-center">
            <HorizontalText handleClick={handleScrollToContact} />
          </div>
  
          <div className="px-[1rem] flex flex-col justify-center items-center md:flex md:justify-center md:items-center">
            <Contact ref={aboutContact} id="contact"/>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
  
}