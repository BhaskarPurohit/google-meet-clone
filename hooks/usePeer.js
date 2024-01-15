const { useState, useEffect } = require("react")
import peer from "peerjs"

const usePeer = ()=>{
  const [peer, setPeer] = useState(null)
  const [myId, setMyId] = useState()  //used to store id that we get from the server

  useEffect(()=>{},[])


}

export default usePeer