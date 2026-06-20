# Real-Time Chat Application

A simple real-time chat application built using **Node.js**, **Express.js**, and **Socket.IO**. The application allows users to join the chat with a username, view online users, send messages instantly, and receive live updates when users join or leave.

## Features

* Real-time messaging using Socket.IO
* User join notifications
* User leave notifications
* Online users list
* Automatic updates across all connected clients
* Simple and lightweight UI

## Tech Stack

### Backend

* Node.js
* Express.js
* Socket.IO

### Frontend

* HTML
* CSS
* JavaScript

## Project Structure

```text
├── public
│   ├── index.html
│   ├── style.css
│   └── chat.js
│
├── index.js
├── package.json
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd socket-chat-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm run dev
```

or

```bash
node index.js
```

### 4. Open the application

Visit:

```text
http://localhost:3000
```

## How It Works

### User Connection

When a user enters a username and joins:

* The username is stored on the server.
* The user is added to the online users list.
* All connected clients are notified about the new user.

### Messaging

When a user sends a message:

* The message is emitted to the server.
* The server broadcasts the message to all connected clients.
* Messages appear instantly without refreshing the page.

### User Disconnection

When a user disconnects:

* The username is removed from the online users list.
* All clients receive a notification.
* The online users list is updated automatically.

## Socket Events

### Client → Server

| Event   | Description         |
| ------- | ------------------- |
| join    | User joins the chat |
| message | Send a chat message |

### Server → Client

| Event      | Description                     |
| ---------- | ------------------------------- |
| userJoin   | Notifies when a user joins      |
| userLeft   | Notifies when a user leaves     |
| userJoined | Sends updated online users list |
| message    | Broadcasts chat messages        |

## Future Improvements

* Private messaging
* Chat rooms
* User authentication
* Typing indicators
* Message timestamps
* Message persistence using a database
* Responsive UI enhancements

## Learning Outcomes

This project demonstrates:

* WebSocket communication using Socket.IO
* Real-time event handling
* Client-server architecture
* User presence tracking
* DOM manipulation with JavaScript
* Building interactive web applications

## Author

Sai Praneeth Reddy
