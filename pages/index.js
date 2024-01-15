import { useSocket } from "@/context/socket"
import { useEffect } from "react"
import usePeer from "@/hooks/usePeer"


export default function Home(){
  const socket = useSocket()

  useEffect(()=>{
    socket?.on('connect',()=>{
      console.log(socket.id);  //
    })
  },[socket])
  return(
    <h1>Google meet clone</h1>
  )
}