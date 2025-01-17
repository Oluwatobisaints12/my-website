"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { vanillaText } from "@/app/font";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "./theme-provider";

const Header = ({onButtonClick, buttonClick, handleClick, handleButtonClick}: any) => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  // Ensure the component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "" },
    { name: "Work", path: "/work" },
    { name: "Testimonies", path: "/testimonies" },
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
    <div className="relative w-full flex justify-between lg:justify-center ">
      {/* Main header content */}
      <div className="flex justify-between items-center w-full lg:max-w-[1256px] gap-[2.5rem] relative z-10">
        <section className="flex items-center w-full justify-between">
          <h1 className={`${vanillaText.className} text-clamp-header-name`}>
            Great Anosike
          </h1>
          <nav className="relative">
            {/* Full-screen overlay */}
            <div
              className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-300 z-20 lg:hidden ${
                isMobileMenuOpen 
                  ? "opacity-100 pointer-events-auto" 
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={toggleMobileMenu}
            />
  
            {/* Navigation list - increased z-index to appear above overlay */}
            <ul
              className={`fixed right-0 top-0 pt-[5rem] w-[250px] lg:w-auto lg:h-auto lg:pt-0 lg:flex lg:static bg-black lg:bg-transparent p-6 lg:p-0 shadow-md lg:shadow-none z-30 transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100 pointer-events-auto"
                  : "translate-x-full opacity-0 pointer-events-none"
              } lg:translate-x-0 lg:opacity-100 lg:pointer-events-auto space-y-6 lg:space-y-0 lg:space-x-8 ${theme === 'light'? 'bg-white' : 'bg-black'}`}
            >
  {navItems.map((item) => (
  <li key={item.name} className="lg:inline-block before:content-none">
    {item.name === "About" ? (
      <button
        onClick={(e) => {
          e.preventDefault(); // Prevent default behavior
          onButtonClick(); // Trigger the custom handler
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
    ) : item.name === 'Testimonies' ? (
      <button onClick={(e)=> {
        e.preventDefault()
        handleButtonClick()
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
        </section>
  
        <div className="flex items-center flex-row gap-[1rem] z-30">
          <section>
            <ModeToggle />
          </section>
          {/* Mobile Menu Icon - increased z-index to appear above overlay */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="relative w-[18px] h-[12px] focus:outline-none"
            >
              <div 
                className={`
                  absolute top-1/2 left-0
                  w-full h-[2px] 
                  before:content-[''] before:absolute before:left-0 before:w-full before:h-[2px]
                  after:content-[''] after:absolute after:left-0 after:w-full after:h-[2px]
                  before:transition-all before:duration-300
                  after:transition-all after:duration-300
                  ${theme === "dark" ? "bg-white before:bg-white after:bg-white" : "bg-[#1C1B1B] before:bg-[#1C1B1B] after:bg-[#1C1B1B]"}
                  ${isMobileMenuOpen ? "bg-transparent" : ""}
                  ${isMobileMenuOpen 
                    ? "before:top-0 before:rotate-45 after:top-0 after:-rotate-45" 
                    : "before:-top-2 after:top-2"}
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
