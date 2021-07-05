import { useContext } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { ThemeContext } from 'context/ThemeContext';

import './DarkModeToggle.scss';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div
      className="theme-switch-wrapper"
      title={`Change to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <label className="theme-switch" htmlFor="darkmode-toggle">
        <input
          checked={isDarkMode}
          type="checkbox"
          id="darkmode-toggle"
          onChange={toggleDarkMode}
        />
        <div className="slider round"></div>
        <BiMoon className="dark-mode-icon moon" />
        <BiSun className="dark-mode-icon sun" />
      </label>
    </div>
  );
}

export default DarkModeToggle;
