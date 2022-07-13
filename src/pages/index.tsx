import Head from "next/head";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Chats from "../components/Chats";
import SideBar from "../components/SideBar";

let socket = io("http://localhost:3001");

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

useEffect(() => {
  socket.on("chat", (msg) => {
      setMessages([...messages, msg])
  })
}, [messages]);

const sendMessage = () => {
  socket.emit("chat", input);
  setInput("");
}
  return (
    <div>
      <Head>
        <title>Support Chat</title>
      </Head>
      <h1>Suppport Chat</h1>
      <Chats/>
      <SideBar/>
    </div>
  );
}
