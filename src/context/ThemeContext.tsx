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
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDarkMode(Boolean(prefersDarkMode));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
