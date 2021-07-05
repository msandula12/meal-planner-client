import { useContext } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { ThemeContext } from 'context/ThemeContext';

import './DarkModeToggle.scss';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

  // return isDarkMode ? (
  //   <BiMoon
  //     className="icon"
  //     onClick={toggleDarkMode}
  //     title="Change to light mode"
  //   />
  // ) : (
  //   <BiSun
  //     className="icon"
  //     onClick={toggleDarkMode}
  //     title="Change to dark mode"
  //   />
  // );
  return (
    <div
      className="theme-switch-wrapper"
      title={`Change to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <label className="theme-switch" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onChange={toggleDarkMode} />
        <div className="slider round"></div>
      </label>
    </div>
  );
}

export default DarkModeToggle;
