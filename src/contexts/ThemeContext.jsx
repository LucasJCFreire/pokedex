import { createContext, useState } from "react";

export const themes = {
  light: {
    color: "#333",
    background: "#eee",
  },
  dark: {
    color: "#eee",
    background: "#333",
  },
};

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
