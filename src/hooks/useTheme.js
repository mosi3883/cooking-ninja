import { useContext } from 'react';
import { themeContext } from '../context/theme-contenxt';

export const useTheme = function () {
  const ctx = useContext(themeContext);

  if (ctx === undefined) {
    throw new Error('useTheme must be used inside a themeProvider');
  }

  return ctx;
};
