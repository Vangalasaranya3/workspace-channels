# 🚀 Workspace Channels

## Overview

Workspace Channels is a full-stack web application that enables users to create communication channels and exchange messages within those channels.

This project was developed using React.js for the frontend, Node.js and Express.js for the backend, and PostgreSQL as the database.

---

## Features

### 📁 Create Channel

Users can create a new channel by providing:

* Channel Name
* Description

### 📂 View Channels

Displays all available channels with:

* Channel Name
* Description

### 📨 Send Messages

Users can send messages inside a channel by entering:

* Sender Name
* Message Text

### 💬 View Messages

Displays all messages stored for a channel.

---

## Technology Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

---

## Project Architecture

React.js Frontend

⬇

Node.js + Express REST APIs

⬇

PostgreSQL Database

---

## API Endpoints

### Create Channel

POST /channels

### Get All Channels

GET /channels

### Get Channel Details

GET /channels/:id

### Send Message

POST /messages/:channelId

### Get Messages

GET /messages/:channelId

---

## Database Schema

### channels

| Column      | Type               |
| ----------- | ------------------ |
| id          | SERIAL PRIMARY KEY |
| name        | VARCHAR            |
| description | TEXT               |
| created_at  | TIMESTAMP          |

### messages

| Column       | Type               |
| ------------ | ------------------ |
| id           | SERIAL PRIMARY KEY |
| channel_id   | INTEGER            |
| sender_name  | VARCHAR            |
| message_text | TEXT               |
| created_at   | TIMESTAMP          |

---

## Installation & Setup

### Backend Setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```


## Learning Outcomes

Through this project I gained experience in:

* React Component Development
* REST API Development using Express.js
* PostgreSQL Database Integration
* Frontend and Backend Communication using Axios
* Full-Stack Application Development

---

## Author

**Saranya**

Full Stack Web Development Project using React.js, Node.js, Express.js, and PostgreSQL.
