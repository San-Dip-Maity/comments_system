# Real-Time Comments System

A real-time comments system built with Next.js, Node.js, Socket.IO, and MySQL. Users can log in with a username, post comments, and see comments update in real-time.

## Features

- Simple username-based authentication
- Real-time comments updates using Socket.IO
- Responsive Material UI design
- MySQL database storage
- RESTful API endpoints

## Tech Stack

### Frontend
- Next.js 14
- Material UI (MUI)
- Socket.IO Client
- Axios

### Backend
- Node.js
- Express.js
- Socket.IO
- MySQL2
- CORS

## Prerequisites

Before starting, install:
- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm

## Quick Start Guide

### 1. Clone the Repository
```
git clone [<repository-url>](https://github.com/San-Dip-Maity/comments_system.git)
cd comments-system
```
### Create database in Mysql
```
CREATE DATABASE comments_db;
USE comments_db;

CREATE TABLE comments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  comment TEXT,
  timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);
```


### 2.  Backend Setup
Install Server Dependencies
```
cd server
npm i
```
### 3. Start server
```
npm start
```
### 4. Frontend Setup
Install Frontend Dependencies
```
cd client
npm i
```
### 5. Start frontend
```
npm run dev
```
