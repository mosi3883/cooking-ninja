import { createContext, useReducer } from "react";

export const themeContext = createContext();

const themeReducer = (oldThemeState, action) => {
  if (action.type === "CHANGE_COLOR") {
    return { ...oldThemeState, color: action.payload };
  }
  return oldThemeState;
};

export const ThemeProvider = function ({ children }) {
  const [themeState, dispatch] = useReducer(themeReducer, { color: "blue" });

  const changeThemeColor = function (color) {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  return (
    <themeContext.Provider value={{ ...themeState, changeThemeColor }}>
      {children}
    </themeContext.Provider>
  );
};
