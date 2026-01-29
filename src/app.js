// Carga las variables de entorno desde .env en la raíz del proyecto
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// Importa los módulos necesarios
const express = require('express');
const mongoose = require('mongoose');

// Crea una instancia de Express
const app = express();
app.disable('x-powered-by'); // Seguridad: Ocultar información del framework

// Middleware de seguridad - Cabeceras HTTP para protección contra vulnerabilidades web
app.use((req, res, next) => {
  // Content Security Policy moderna y completa
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self'",
      "style-src 'self'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "media-src 'self'",
      "object-src 'none'",
      "worker-src 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "manifest-src 'self'",
      "frame-ancestors 'none'" // Bloquea cualquier frame externo
    ].join('; ')
  );
  // X-Frame-Options: DENY (legacy, para navegadores antiguos)
  res.setHeader('X-Frame-Options', 'DENY');
  // X-Content-Type-Options: nosniff
  res.setHeader('X-Content-Type-Options', 'nosniff');
  // Referrer Policy
  res.setHeader('Referrer-Policy', 'no-referrer');
  // Permissions Policy
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
  // Content-Type por defecto para JSON
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
});

// Middleware para parsear cuerpos en formato JSON
app.use(express.json());

// Ruta base para facilitar chequeos de estado y escaneos
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send('API Reservas Running');
});

// Rutas para autenticación y reservas/turnos
try {
  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/reservas', require('./routes/reserva'));
  console.log('Rutas cargadas correctamente');
} catch (err) {
  console.error('Error cargando rutas:', err);
}

// Conexión a la base de datos MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar MongoDB', err);
  }
};
connectDB();

// Exporta la app configurada
module.exports = app;
