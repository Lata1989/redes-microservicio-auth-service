import express from 'express';
import bodyParser from 'body-parser'; // Requerir body-parser
import authRoutes from './routes/authRoutes.js';

const app = express();

// Configurar body-parser para manejar cuerpos de solicitudes JSON y URL-encoded
app.use(bodyParser.json()); // Parsear cuerpos JSON automáticamente
app.use(bodyParser.urlencoded({ extended: true })); // Parsear cuerpos URL-encoded

// Rutas
app.use('/auth', authRoutes);

export default app;
