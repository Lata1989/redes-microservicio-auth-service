import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Configurar middleware
app.use(bodyParser.json());
app.use('/auth', authRoutes);

export default app;
