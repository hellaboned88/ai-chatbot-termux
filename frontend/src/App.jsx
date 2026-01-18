import { useState } from "react";

const API = "http://127.0.0.1:8000";

export default function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  async function send() {
    const userMsg = { role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    const res = await fetch(API + "/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: input,
        history: messages,
      }),
    });

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let assistant = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      assistant += decoder.decode(value);
      setMessages((m) => [
        ...m.slice(0, -1),
        { role: "assistant", content: assistant },
      ]);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>AI Chatbot (Termux)</h2>
      <div style={{ minHeight: 300 }}>
        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.role}:</b> {m.content}
          </div>
        ))}
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%" }}
      />
      <button onClick={send}>Send</button>
    </div>
  );
}
