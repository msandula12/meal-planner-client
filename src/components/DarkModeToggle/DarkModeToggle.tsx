import { useContext } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { ThemeContext } from 'context/ThemeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return isDarkMode ? (
    <BiMoon
      className="icon"
      onClick={toggleDarkMode}
      title="Change to light mode"
    />
  ) : (
    <BiSun
      className="icon"
      onClick={toggleDarkMode}
      title="Change to dark mode"
    />
  );
}

export default DarkModeToggle;
