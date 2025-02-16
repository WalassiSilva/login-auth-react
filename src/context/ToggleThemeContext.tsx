import { createContext, useState, useEffect, useContext } from "react";

type ToggleThemeContextType = {
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

const ToggleThemeContext = createContext<ToggleThemeContextType | undefined>(
  undefined
);

export function ToggleThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    let savedMode = localStorage.getItem("displayMode");
    if (!savedMode) {
      savedMode = "light";
      setIsDarkTheme(false);
      localStorage.setItem("displayMode", savedMode);
    }
    setIsDarkTheme(savedMode === "dark" ? true : false);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("displayMode", !isDarkTheme ? "dark" : "light");
  };

  return (
    <ToggleThemeContext.Provider value={{ toggleTheme, isDarkTheme }}>
      {children}
    </ToggleThemeContext.Provider>
  );
}

export function useToggleTheme() {
  const context = useContext(ToggleThemeContext);
  if(!context) {
    throw new Error("useToggleTheme must be used within a ToggleThemeProvider");
  }
  return context;
}