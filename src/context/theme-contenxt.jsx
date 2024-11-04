import { createContext, useReducer } from 'react';

export const themeContext = createContext();

const themeReducer = (oldThemeState, action) => {
  if (action.type === 'CHANGE_COLOR') {
    return { ...oldThemeState, color: action.payload };
  }
  if (action.type === 'CHANGE_MODE') {
    return { ...oldThemeState, mode: action.payload };
  }
  return oldThemeState;
};

export const ThemeProvider = function ({ children }) {
  const [themeState, dispatch] = useReducer(themeReducer, { color: '#58249c', mode: 'dark' });

  const changeThemeColor = function (color) {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };

  const changeMode = function (mode) {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };
  return (
    <themeContext.Provider value={{ ...themeState, changeThemeColor, changeMode }}>{children}</themeContext.Provider>
  );
};
