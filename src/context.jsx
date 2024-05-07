import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
  const storedDarkMode = JSON.parse(localStorage.getItem("darkTheme"));
  if (!storedDarkMode) {
    return prefersDarkMode;
  }
  return storedDarkMode;
};

const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchInput, setSearchInput] = useState("cat");
  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    localStorage.setItem("darkTheme", !isDarkTheme);
  };
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <GlobalContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchInput, setSearchInput }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
