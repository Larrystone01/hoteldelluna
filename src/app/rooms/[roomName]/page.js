import RoomPage from "./Room"
import { roomData } from "@/lib/data";

export default function Room ({params}){
  const {roomName} = params;
  const room = roomData.find((r)=>r.slug === roomName)

  return <RoomPage Room={room}/>
   
}