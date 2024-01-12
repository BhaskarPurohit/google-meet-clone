"use client";

import { io } from "socket.io-client";
import {createContext, useContext, useEffect, useState} from "react"

const SocketContext = createContext(null)

export const useSocket = ()=>{
    const socket = useContext(SocketContext)
    return socket
}

export const SocketProvider = (props) =>{
    const [socket, setSocket] = useState(null)
    const {children} = props
    useEffect(()=>{
        const connection = io()
        setSocket(connection)
    },[])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

