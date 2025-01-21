"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { vanillaText } from "@/app/font";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";

const Header = ({onButtonClick, buttonClick, handleClick, handleButtonClick}: any) => {
  const router = useRouter()

  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  // Ensure the component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
const handleNavigation = async (path: string) => {
  setIsLoading(true);
  await router.push(path);
  setIsLoading(false);
};
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "" },
    { name: "Work", path: "/work" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Gallery", path: "/gallery" },
    { name: "Mentorship", path: "/mentorship" },
    { name: "Contact", path: "/contact" },
  ];

  if (!mounted) {
    // Placeholder to prevent mismatched styles during SSR
    return null;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle('menu-open');
  };

  return (
    // Add a new wrapper div to handle the overall layout
<div className="relative w-full flex justify-between lg:justify-center pt-[1rem]">
  <div className="flex justify-between w-[398px] items-center lg:w-full lg:max-w-[1256px] relative z-10">
    <section className="flex items-center">
      <h1 className={`${vanillaText.className} text-clamp-header-name`}>Great Anosike</h1>
    </section>
<div className="flex items-center gap-[1rem]">
<div className="flex lg:hidden">
<ModeToggle />
</div>

    {/* Navigation Section */}
    <nav className="relative">
      {/* Mobile Menu Overlay */}
      <div
  className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300  lg:hidden 
  ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
  onClick={toggleMobileMenu} // Clicking overlay should close menu
/>


      {/* Navigation List */}
      <ul
  className={`fixed right-0 top-0 h-full pt-[5rem] w-[250px] bg-black lg:bg-transparent p-6 shadow-md transform transition-all duration-300 ease-in-out  lg:p-0
    ${isMobileMenuOpen ? "translate-x-0 opacity-100 pointer-events-auto" : "translate-x-full opacity-0 pointer-events-none"}
    lg:static lg:flex lg:opacity-100 lg:pointer-events-auto lg:w-auto lg:translate-x-0 lg:shadow-none 
    space-y-6 lg:space-y-0 lg:space-x-8 ${theme === 'light' ? 'bg-white' : 'bg-black'}
  `}
      >
  {navItems.map((item) => (
  <li key={item.name} className="lg:inline-block before:content-none">
    {item.name === "About" ? (
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          onButtonClick(); // Trigger the custom handler
          toggleMobileMenu(); 
        }}
        className="cursor-pointer bg-transparent border-none"
      >
        <span
          className={`text-[1rem] no-underline transition-colors duration-200 ${
            pathname === item.path
              ? "text-[#F57F17]"
              : theme === "dark"
              ? "text-white hover:text-[#F57F17]"
              : "text-[#1C1B1B] hover:text-[#F57F17]"
          }`}
        >
          {item.name}
        </span>
      </button>
    ) : item.name === "Work" ? (
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          buttonClick(); // Trigger the custom handler
          toggleMobileMenu(); 
        }}
        className="cursor-pointer bg-transparent border-none"
      >
        <span
          className={`text-[1rem] no-underline transition-colors duration-200 ${
            pathname === item.path
              ? "text-[#F57F17]"
              : theme === "dark"
              ? "text-white hover:text-[#F57F17]"
              : "text-[#1C1B1B] hover:text-[#F57F17]"
          }`}
        >
          {item.name}
        </span>
      </button>
    ) : item.name === 'Contact' ? (
<button onClick={(e)=> {
  e.preventDefault()
  handleClick()
  toggleMobileMenu(); 
  console.log('contact')
}}
className="cursor-pointer bg-transparent border-none"

>
<span
          className={`text-[1rem] no-underline transition-colors duration-200 ${
            pathname === item.path
              ? "text-[#F57F17]"
              : theme === "dark"
              ? "text-white hover:text-[#F57F17]"
              : "text-[#1C1B1B] hover:text-[#F57F17]"
          }`}
        >
          {item.name}
        </span>
</button> 
    ) : item.name === 'Testimonial' ? (
      <button onClick={(e)=> {
        e.preventDefault()
        handleButtonClick()
        toggleMobileMenu(); 
      }}
      className="cursor-pointer bg-transparent border-none"
      
      >
      <span
                className={`text-[1rem] no-underline transition-colors duration-200 ${
                  pathname === item.path
                    ? "text-[#F57F17]"
                    : theme === "dark"
                    ? "text-white hover:text-[#F57F17]"
                    : "text-[#1C1B1B] hover:text-[#F57F17]"
                }`}
              >
                {item.name}
              </span>
      </button> 
    ) : (
      <Link href={item.path}>
       <span
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          handleNavigation(item.path); // Use the navigation function
        }}
          className={`text-[1rem] no-underline transition-colors duration-200 ${
            pathname === item.path
              ? "text-[#F57F17]"
              : theme === "dark"
              ? "text-white hover:text-[#F57F17]"
              : "text-[#1C1B1B] hover:text-[#F57F17]"
          }`}
        >
          {item.name}
        </span>
      </Link>
    )}
  </li>
))}

      </ul>
    </nav>
    <div className="hidden lg:flex">
    <ModeToggle  />
    </div>
    {/* Mobile Menu Toggle Button */}
    <div className="lg:hidden">
      <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="relative w-[18px] h-[12px] focus:outline-none">
        <div
          className={`
            absolute top-1/2 left-0 w-full h-[2px] 
            before:content-[''] before:absolute before:left-0 before:w-full before:h-[2px]
            after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px]
            before:transition-all before:duration-300 after:transition-all after:duration-300
            ${theme === "dark" ? "bg-white before:bg-white after:bg-white" : "bg-[#1C1B1B] before:bg-[#1C1B1B] after:bg-[#1C1B1B]"}
            ${isMobileMenuOpen ? "bg-transparent before:top-0 before:rotate-45 after:top-0 after:-rotate-45" : "before:-top-2 after:top-2"}
          `}
        />
      </button>
    </div>
</div>
  </div>
</div>

  );
};

export default Header;
