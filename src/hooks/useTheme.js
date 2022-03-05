import { useContext } from "react";
import { themeContext } from "../context/theme-contenxt";

export const useTheme = function () {
  const context = useContext(themeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used inside a themeProvider");
  }

  return context;
};
