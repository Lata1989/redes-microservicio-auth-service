import express from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());  // Asegúrate de que el cuerpo de la solicitud se procese como JSON

app.use('/auth', authRoutes);

export default app;

