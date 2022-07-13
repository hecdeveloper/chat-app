import { useEffect, useState } from "react";
import io from "socket.io-client";

let socket = io("http://localhost:3001");


export default function Chats() {
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
    <>
       <input
        placeholder="message"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={sendMessage}>send</button>
      <div id="messages">
        {messages.map((msg, idx) => (
          <div key={idx}className="message">{msg}</div>
        ))}
      </div>
    </>
  );
}




  
