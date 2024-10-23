import express from 'express';
import cors from 'cors';

import commentRoutes from './routes/commentRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', commentRoutes);
app.use('/api', authRoutes);

export default app;
