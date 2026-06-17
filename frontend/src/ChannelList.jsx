import { useEffect, useState } from "react";
import api from "./api";

function ChannelList() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    getChannels();
  }, []);

  const getChannels = async () => {
    try {
      const res = await api.get("/channels");
      setChannels(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>📂 Channels ({channels.length})</h2>

      {channels.length === 0 ? (
        <p>No channels available</p>
      ) : (
        channels.map((channel) => (
          <div key={channel.id} className="channel-card">
            <h3>{channel.name}</h3>

            <p>
              <strong>Description:</strong>{" "}
              {channel.description || "No description"}
            </p>

            {channel.created_at && (
              <small>
                Created:{" "}
                {new Date(channel.created_at).toLocaleDateString()}
              </small>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default ChannelList;