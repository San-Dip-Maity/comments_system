import { io } from 'socket.io-client';

export const initializeSocket = (onNewComment) => {
  const socket = io('http://localhost:3001');
  socket.on('newComment', onNewComment);
  return socket;
};