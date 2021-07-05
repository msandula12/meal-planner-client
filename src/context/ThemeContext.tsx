import { createContext, ReactNode, useState } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>(undefined!);

type Props = {
  children: ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const getInitialDarkModePreference = () => {
    // Check localStorage
    const storedTheme = localStorage.getItem('theme');
    if (Boolean(storedTheme)) {
      return storedTheme === 'dark';
    }

    // Otherwise, default to user's prefers-color-scheme value
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    return Boolean(prefersDarkMode);
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkModePreference());

  const toggleDarkMode = () => {
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
