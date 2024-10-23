import { createServer } from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import handleSockets from './sockets/commentsSocket.js';

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

handleSockets(io);

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
