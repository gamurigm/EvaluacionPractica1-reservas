// Importa la aplicación Express configurada
const app = require('./app');

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;

// Inicia el servidor y escucha en el puerto definido
// Inicia el servidor y escucha en todas las interfaces de red para permitir conexiones desde WSL2
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT} (disponible en red local)`);
});

