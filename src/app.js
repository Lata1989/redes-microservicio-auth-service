import express from 'express';
import bodyParser from 'body-parser';
import { registerUser, authenticateUser } from './controllers/authController.js';

const app = express();

// Configurar body-parser para manejar cuerpos de solicitudes JSON
app.use(bodyParser.json());

// Middleware para registrar solicitudes entrantes
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

// Ruta para registrar un nuevo usuario
app.post('/auth/register', registerUser);

// Ruta para autenticar un usuario
app.post('/auth/login', authenticateUser);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Microservicio de autenticación funcionando OK!');
});

export default app;


/*
import express from 'express';
import bodyParser from 'body-parser'; // Importa body-parser
import authRoutes from './routes/authRoutes.js';

const app = express();

// Configurar body-parser para manejar cuerpos de solicitudes JSON
app.use(bodyParser.json());

// Middleware para registrar solicitudes entrantes
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.originalUrl}`);
  next();
});

// Rutas
app.use('/auth', authRoutes);

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Microservicio de autenticación funcionando OK!');
});

export default app;
*/