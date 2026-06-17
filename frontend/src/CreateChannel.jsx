import { useState } from "react";
import api from "./api";

function CreateChannel() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const createChannel = async () => {
    if (!name) {
      alert("Please enter channel name");
      return;
    }

    try {
      await api.post("/channels", {
        name,
        description,
      });

      alert("✅ Channel Created Successfully");

      setName("");
      setDescription("");

    } catch (error) {
      console.log(error);
      alert("❌ Failed to create channel");
    }
  };

  return (
    <div>
      <h2>📁 Create Channel</h2>

      <input
        type="text"
        placeholder="Enter Channel Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={createChannel}>
        Create Channel
      </button>
    </div>
  );
}

export default CreateChannel;