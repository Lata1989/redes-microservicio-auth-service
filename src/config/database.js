import { MongoClient } from 'mongodb';
import { mongoUri, dbName } from './envConfig.js';

let db = null;

// Conectar a la base de datos MongoDB
export async function connectToDatabase() {
  if (db) return db;

  const client = new MongoClient(mongoUri);
  await client.connect();
  db = client.db(dbName);

  return db;
}

// Obtener la instancia de la base de datos
export function getDB() {
  if (!db) {
    throw new Error('Base de datos no conectada');
  }
  return db;
}
