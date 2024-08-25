import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

export const port = process.env.PORT || 3002; // Puerto del servidor
export const mongoUri = process.env.MONGO_URI; // URI de conexión a MongoDB
export const dbName = process.env.DB_NAME; // Nombre de la base de datos
export const userCollection = process.env.USER_COLLECTION; // Nombre de la colección de usuarios
export const jwtSecret = process.env.JWT_SECRET; // Secreto para firmar JWT
export const jwtExpiresIn = process.env.JWT_EXPIRES_IN; // Tiempo de expiración del JWT
