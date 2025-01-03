
"use client"
import Header from "./components/Header";
import { ThemeProvider } from "next-themes";
import './globals.css'

import { AppProps } from "next/app";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', 'dark');
  // }, []);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
    </ThemeProvider>
  );
}
