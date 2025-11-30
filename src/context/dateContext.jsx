"use client";
import { createContext, useContext, useState } from "react";

const DateContext = createContext();

export function useDates() {
  return useContext(DateContext);
}

export function DateProvider({ children }) {
  const [dates, setDates] = useState({ check_in: null, check_out: null });

  return (
    <DateContext.Provider value={{ dates, setDates }}>
      {children}
    </DateContext.Provider>
  );
}
