import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Configurar body-parser para manejar cuerpos de solicitudes JSON
app.use(bodyParser.json()); // Parsear cuerpos JSON automáticamente

// Rutas
app.use('/auth', authRoutes);

// Ruta raíz
app.get('/', (req, res) => {
    res.send('Microservicio de autenticacion funcionando OK!');
});

export default app;
