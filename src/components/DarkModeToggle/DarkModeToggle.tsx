import { useDispatch, useSelector } from 'react-redux';
import { BiMoon, BiSun } from 'react-icons/bi';

import { changeDarkMode, selectIsDarkMode } from 'redux/reducers/userSlice';

function DarkModeToggle() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(selectIsDarkMode);

  const toggleDarkMode = () => {
    dispatch(changeDarkMode(!isDarkMode));
  };

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
