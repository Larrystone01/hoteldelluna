"use client";
import React from "react";
import { useEffect, useState } from "react";
import RoomPage from "./Room";
import { supabase } from "@/lib/supabaseClient";

export default function Room({ params }) {
  const [rooms, setRooms] = useState([]);
  const { roomName } = React.use(params);
  useEffect(() => {
    async function getRooms() {
      const { data, error } = await supabase.from("rooms").select("*");
      if (error) throw error;
      else setRooms(data);
    }
    getRooms();
  }, []);

  const room = rooms.find((room) => room.slug === roomName);

  return <RoomPage Room={room} />;
}
