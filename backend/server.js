const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "workspace_channels",
  password: "saranya3",
  port: 5432,
});

pool.connect()
  .then(() => console.log("PostgreSQL Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Backend Running");
});

// CREATE CHANNEL
app.post("/channels", async (req, res) => {
  try {
    const { name, description } = req.body;

    const result = await pool.query(
      "INSERT INTO channels(name,description) VALUES($1,$2) RETURNING *",
      [name, description]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.log("CHANNEL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET CHANNELS
app.get("/channels", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM channels ORDER BY created_at DESC"
    );

    res.json(result.rows);
  } catch (err) {
    console.log("GET CHANNELS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET SINGLE CHANNEL
app.get("/channels/:id", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM channels WHERE id=$1",
      [req.params.id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.log("GET CHANNEL ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// SEND MESSAGE
app.post("/messages/:channelId", async (req, res) =>
 { console.log("MESSAGE API HIT");
  try {
    const { sender_name, message_text } = req.body;

    const result = await pool.query(
      `INSERT INTO messages
      (channel_id,sender_name,message_text)
      VALUES($1,$2,$3)
      RETURNING *`,
      [
        req.params.channelId,
        sender_name,
        message_text
      ]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.log("MESSAGE ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// GET MESSAGES
app.get("/messages/:channelId", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM messages WHERE channel_id=$1",
      [req.params.channelId]
    );

    res.json(result.rows);
  } catch (err) {
    console.log("GET MESSAGES ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server Running");
});