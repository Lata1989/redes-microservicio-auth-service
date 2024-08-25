import express from 'express';
import { registerUser, authenticateUser } from '../controllers/authController.js';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para autenticar un usuario
router.post('/login', authenticateUser);

export default router;
