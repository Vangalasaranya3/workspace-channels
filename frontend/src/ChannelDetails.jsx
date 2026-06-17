import { useEffect, useState } from "react";
import api from "./api";

function ChannelDetails() {
  const [messages, setMessages] = useState([]);

  const channelId = 1;

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      const res = await api.get(`/messages/${channelId}`);
      setMessages(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="message-heading">
        💬 Messages ({messages.length})
      </h2>

      {messages.length === 0 ? (
        <p>No messages available</p>
      ) : (
        messages.map((msg) => (
          <div key={msg.id} className="message-card">

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px"
              }}
            >
              <strong>{msg.sender_name}</strong>

              {msg.created_at && (
                <small>
                  {new Date(
                    msg.created_at
                  ).toLocaleDateString()}
                </small>
              )}
            </div>

            <p
              style={{
                margin: 0
              }}
            >
              {msg.message_text}
            </p>

          </div>
        ))
      )}
    </div>
  );
}

export default ChannelDetails;