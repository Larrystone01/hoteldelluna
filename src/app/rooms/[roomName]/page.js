"use client";
import React from "react";
import { useEffect, useState } from "react";
import RoomPage from "./components/Room";
import { supabase } from "@/lib/supabaseClient";

export default function Room({ params }) {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { roomName } = React.use(params);
  useEffect(() => {
    async function getRooms() {
      setLoading(true);
      setError(null);
      try {
        const { data, error } = await supabase.from("rooms").select("*");
        if (error) throw error;
        setRooms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    getRooms();
  }, []);

  const room = rooms.find((room) => room.slug === roomName);

  return(
    <>
    
    <RoomPage Room={room} />;
    </>
  ) 
}
