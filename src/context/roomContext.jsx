"use client";
import { createContext, useContext, useState, useEffect } from "react";

const RoomContext = createContext();

export function useRoom() {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoom must be used within a RoomProvider");
  }
  return context;
}

export function RoomProvider({ children }) {
  const [selectedRoom, setSelectedRoom] = useState(null);
  useEffect(() => {
    const savedRoom = sessionStorage.getItem("selectedRoom");
    if (savedRoom) {
      setSelectedRoom(JSON.parse(savedRoom));
    }
  }, []);

  useEffect(() => {
    if (selectedRoom) {
      sessionStorage.setItem("selectedRoom", JSON.stringify(selectedRoom));
    } else {
      sessionStorage.removeItem("selectedRoom");
    }
  }, [selectedRoom]);

  const clearSelectedRoom = () => {
    setSelectedRoom(null);
    sessionStorage.removeItem("selectedRoom");
  };
  return (
    <RoomContext.Provider
      value={{ selectedRoom, setSelectedRoom, clearSelectedRoom }}
    >
      {children}
    </RoomContext.Provider>
  );
}
