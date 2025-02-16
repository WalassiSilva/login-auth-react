import React from "react";
import { useToggleTheme } from "../context/ToggleThemeContext";

export default function Container({ children }: { children: React.ReactNode }) {
  const { isDarkTheme } = useToggleTheme();
  return (
    <main
      className={`${isDarkTheme ? "dark" : ""} transition-colors duration-300 `}
    >
      {children}
    </main>
  );
}
