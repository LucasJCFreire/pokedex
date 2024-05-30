import { createContext, useState } from "react";

export const themes = {
  light: {
    color: "#333",
    background: "#eee",
  },
  dark: {
    color: "#eee",
    background: "#fff",
  },
};

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, SetTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={(theme, SetTheme)}>
      {children}
    </ThemeContext.Provider>
  );
}
