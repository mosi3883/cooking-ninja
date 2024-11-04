import { useTheme } from './../hooks/useTheme';
import modeIcon from '../assets/mode-icon.svg';
// styles
import './ThemeSelector.css';
const themeColors = ['#58249c', '#249c6b', '#b70233'];

function ThemeSelector() {
  const { changeThemeColor, changeMode, mode } = useTheme();

  const toggleMode = function () {
    mode === 'light' ? changeMode('dark') : changeMode('light');
  };

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img
          src={modeIcon}
          alt='sun bright 6'
          onClick={toggleMode}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
      <div className='theme-buttons'>
        {themeColors.map((color) => (
          <div key={color} onClick={() => changeThemeColor(color)} style={{ background: color }} />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
