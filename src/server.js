import app from './app.js';
import { connectToDatabase } from './config/database.js';
import { port } from './config/envConfig.js';

// Iniciar el servidor después de conectar a la base de datos
async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Servidor de autenticación en el puerto ${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
}

startServer();
