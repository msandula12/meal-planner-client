import { useContext } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { ThemeContext } from 'context/ThemeContext';

import Tooltip from 'components/Tooltip/Tooltip';

import './DarkModeToggle.scss';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Tooltip content={`Change to ${isDarkMode ? 'light' : 'dark'} mode`}>
      <div className="theme-switch-wrapper">
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
    </Tooltip>
  );
}

export default DarkModeToggle;
