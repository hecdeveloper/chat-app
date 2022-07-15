import Head from "next/head";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import Chats from "../components/Chats";
import Sidebar from "../components/SideBar";

let socket = io("http://localhost:3001");

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("chat", (msg) => {
      setMessages([...messages, msg]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit("chat", input);
    setInput("");
  };
  return (
    <div>
      <Head>
        <title>Support Chat</title>
      </Head>
      <div className="flex h-screen">
        {<Sidebar />}
        <main className="flex-1 bg-grey-lighest">
          <nav className="bg-white px-10">
            <ul className="list-reset flex">
              <li>
                <a className="block py-4 px-3 hover:bg-red-lighest font-bold border-b-2 border-red cursor-pointer">
                  User Name
                </a>
              </li>
              <li>
                <a className="block py-4 px-3 hover:bg-red-lighest font-bold border-b-2 border-b-2 cursor-pointer">
                  All
                </a>
              </li>
              <li>
                <a className="block py-4 px-3 hover:bg-red-lighest font-bold border-b-2 border-b-2 cursor-pointer">
                  Resolved
                </a>
              </li>
            </ul>
          </nav>
          <div className="p-10">
            <Chats />
          </div>
        </main>
      </div>
    </div>
  );
}
