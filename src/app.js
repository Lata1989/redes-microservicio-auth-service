import express from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());  // Parsear el cuerpo de la solicitud a JSON
app.use('/auth', authRoutes);

export default app;
