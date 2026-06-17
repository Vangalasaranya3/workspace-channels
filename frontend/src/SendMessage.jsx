import { useState } from "react";
import api from "./api";

function SendMessage() {
  const [sender_name, setSenderName] = useState("");
  const [message_text, setMessageText] = useState("");

  const channelId = 1;

  const sendMessage = async () => {
    if (!sender_name || !message_text) {
      alert("Please fill all fields");
      return;
    }

    try {
      await api.post(`/messages/${channelId}`, {
        sender_name,
        message_text,
      });

      alert("✅ Message Sent Successfully");

      setSenderName("");
      setMessageText("");

    } catch (error) {
      console.log(error);
      alert("❌ Failed to send message");
    }
  };

  return (
    <div>
      <h2>📨 Send Message</h2>

      <input
        type="text"
        placeholder="👤 Enter Sender Name"
        value={sender_name}
        onChange={(e) => setSenderName(e.target.value)}
      />

      <input
        type="text"
        placeholder="💬 Type your message..."
        value={message_text}
        onChange={(e) => setMessageText(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
}

export default SendMessage;