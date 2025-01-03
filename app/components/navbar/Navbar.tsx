"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure the component is mounted before accessing theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
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

  return (
    <div className="flex items-center w-full max-w-[1256px] gap-[2.5rem]">
      <section className="flex items-center w-full justify-between">
        <h1 className="text-[2.5rem]">Great Anosike</h1>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <Link href={item.path}>
                  <span
                    className={`text-[1rem] no-underline ${
                      pathname === item.path
                        ? "text-[#F57F17]"
                        : theme === "dark"
                        ? "text-white group-hover:text-[#F57F17]"
                        : "text-[#1C1B1B] group-hover:text-[#F57F17]"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section>
        <ModeToggle />
      </section>
    </div>
  );
};

export default Navbar;
