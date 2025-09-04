"use client";

import { createContext, useContext } from "react";

export const GlobalContext = createContext();
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within GlobalContextProvider"
    );
  }
  return context;
};

export function GlobalContextProvider({ imageData, children }) {
  return (
    <GlobalContext.Provider value={{ imageData }}>
      {children}
    </GlobalContext.Provider>
  );
}
