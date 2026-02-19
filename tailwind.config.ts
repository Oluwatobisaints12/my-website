import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000',
      custom: {
        dark: '#667185',
        light: '#D0D5DD'
      }
    },
    fontSize: {
      'clamp-md': 'clamp(2.5rem, 4vw, 4rem)',
       'clamp-md-para': 'clamp(1rem, 1.25vw, 1.25rem)',
       'clamp-md-header': 'clamp(1.7rem, 1.25vw, 2.5rem)',
        'clamp-md-text': 'clamp(0.75rem, 1.25vw, 1.5rem)',
        'clamp-md-aboutme-text': 'clamp(1rem, 1.25vw, 1.25rem)',
        'clamp-md-aboutme-link': 'clamp(1rem, 1.25vw, 1.125rem)',
        'clamp-curvecard-text': 'clamp(0.75rem, 1.25vw, 1.125rem)',
        'clamp-header-text': 'clamp(2.5rem, 5vw, 4rem)',
        'clamp-horizon-text': 'clamp(1.120rem, 1.25vw, 2.75rem)',
        'clamp-header-horizo-text': 'clamp(2.5rem, 1.25vw, 4.5rem)',
        'clamp-contact-para-text': 'clamp(1rem, 1.25vw, 1.75rem)',
        'clamp-brand-text': 'clamp(1.24rem, 5vw, 4.5rem)',
        'clamp-projecthighlight-text': 'clamp(1.75rem, 5vw, 4rem)',
        'clamp-footer-text': 'clamp(0.75rem, 1.25vw, 1.5rem)',
        'clamp-aboutme-text': 'clamp(2.5rem, 1.25vw, 4rem)',
        'clamp-footer-left-text': 'clamp(1.5rem, 1.25vw, 2.5rem)',
        'clamp-header-name': 'clamp(1.5rem, 2vw, 2.5rem)',
        'clamp-mentorship-header': 'clamp(0.75rem, 1.25vw, 1.25rem)',
        'clamp-mentorship-title': 'clamp(1.2rem, 5vw, 4rem)',
        'clamp-mentorship-absolute-text': 'clamp(1.5rem, 5vw, 4rem)',
        'clamp-slider-text': 'clamp(1.5rem, 5vw, 2.75rem)',
        'clamp-card-text': 'clamp(0.875rem, 1.25vw, 1.25rem)',
        'clamp-card-header': 'clamp(1.75rem, 1.25vw, 2.5rem)',
        'clamp-mentor-header': 'clamp(1.75rem, 4vw, 4rem)',
        'clamp-mentor-text': 'clamp(1.125rem, 4vw, 1.25rem)',
        'clamp-gallery-text': 'clamp(1.25rem, 4.25vw, 3.25rem)',
        'clamp-text': 'clamp(1.6rem, 4vw, 2.5rem)'

    },
    lineHeight: {
      '48px': '48px',
      '46px': '46px',
      '30px': '30px'
    
    },
  },
  plugins: [],
} satisfies Config;
