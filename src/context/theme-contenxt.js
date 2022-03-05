import { createContext } from "react";

export const themeContext = createContext({ color: "light" });

export const ThemeProvider = function ({ children }) {
  return <themeContext.Provider value={{ color: "blue" }}>{children}</themeContext.Provider>;
};
