import { createContext, ReactNode, useEffect, useState } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const initialState: ThemeContextType = {
  isDarkMode: false,
  toggleDarkMode: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialValue = Boolean(storedTheme)
      ? storedTheme === 'dark'
        ? true
        : false
      : Boolean(prefersDarkMode);
    setIsDarkMode(initialValue);
  }, []);

  const toggleDarkMode = () => {
    console.log('toggleDarkMode');
    setIsDarkMode((prevIsDarkMode) => {
      localStorage.setItem('theme', prevIsDarkMode ? 'light' : 'dark');
      return !prevIsDarkMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
