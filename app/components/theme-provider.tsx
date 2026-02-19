// theme-provider.tsx
"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  attribute?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';  // The actual theme after resolving system preference
}

const defaultContext: ThemeContextType = {
  theme: 'dark',
  setTheme: () => {},
  resolvedTheme: 'dark'
};

const ThemeContext = createContext<ThemeContextType>(defaultContext);

export function ThemeProvider({ 
  children, 
  defaultTheme = 'dark',
  attribute = 'data-theme',
  enableSystem = true,
  disableTransitionOnChange = false
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  // Handle system preference changes
  useEffect(() => {
    if (enableSystem) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleChange = () => {
        if (theme === 'system') {
          setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
        }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme, enableSystem]);

  // Initial setup
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
    setMounted(true);
  }, []);

  // Update resolved theme when theme changes
  useEffect(() => {
    if (theme === 'system' && enableSystem) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setResolvedTheme(systemTheme);
    } else {
      setResolvedTheme(theme as 'light' | 'dark');
    }
  }, [theme, enableSystem]);

  // Update document attributes
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (disableTransitionOnChange) {
      root.classList.add('[&_*]:!transition-none');
      requestAnimationFrame(() => {
        root.classList.remove('[&_*]:!transition-none');
      });
    }

    root.setAttribute(attribute, resolvedTheme);
  }, [resolvedTheme, attribute, disableTransitionOnChange]);

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  const value = {
    theme,
    setTheme,
    resolvedTheme
  };

  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}