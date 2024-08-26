import jwt from 'jsonwebtoken';
import { getDB } from '../config/database.js';
import { userCollection, jwtSecret, jwtExpiresIn } from '../config/envConfig.js';

// Registrar un nuevo usuario y generar un token JWT
export async function registerUser(req, res) {
  const { username, password } = req.body;

  try {
    const db = getDB();
    const usersCollection = db.collection(userCollection);

    const existingUser = await usersCollection.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'El nombre de usuario ya existe' });
    }

    const newUser = { username, password, createdAt: new Date(), updatedAt: new Date() };
    await usersCollection.insertOne(newUser);

    // Se estaba generando el token pero no se devolvía en la respuesta
    const token = jwt.sign({ username }, jwtSecret, { expiresIn: jwtExpiresIn });

    res.status(201).json({ message: 'Usuario registrado exitosamente', token }); // Se devolvía el token aquí
  } catch (error) {
    res.status(500).json({ error: 'No se pudo registrar el usuario' });
  }
}

// Autenticar un usuario y generar un token JWT
export async function authenticateUser(req, res) {
  const { username, password } = req.body;

  try {
    const db = getDB();
    const usersCollection = db.collection(userCollection);

    const user = await usersCollection.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ username }, jwtSecret, { expiresIn: jwtExpiresIn });

    res.status(200).json({ message: 'Autenticado exitosamente', token });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo autenticar al usuario' });
  }
}
