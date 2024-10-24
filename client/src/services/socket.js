import { io } from 'socket.io-client';

export const initializeSocket = (onNewComment) => {
  const socket = io('http://localhost:5000');
  socket.on('newComment', onNewComment);
  return socket;
};