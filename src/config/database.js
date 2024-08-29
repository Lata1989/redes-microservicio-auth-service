import { MongoClient } from 'mongodb';
import { mongoUri, dbName } from './envConfig.js';

let db = null;

// Conectar a la base de datos MongoDB
export async function connectToDatabase() {
  if (db) return db;

  try {
    const client = new MongoClient(mongoUri);
    await client.connect();
    db = client.db(dbName);
    console.log(`Conexión exitosa a la base de datos ${dbName}`);
    return db;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error; // Re-lanzar el error para que pueda ser manejado por el servidor
  }
}

// Obtener la instancia de la base de datos
export function getDB() {
  if (!db) {
    throw new Error('Base de datos no conectada');
  }
  return db;
}
