const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { obtenerReservas, obtenerReservaPorId, crearReserva } = require('../controllers/reservaController');

// Ruta pública para health check (sin auth para ZAP)
router.get('/health', (req, res) => {
  res.status(200).json({ 
    message: 'Reservas API', 
    status: 'active' 
  });
});

// Ruta protegida para obtener todas las reservas del usuario
router.get('/', auth, obtenerReservas);

// Ruta protegida para obtener una reserva específica
router.get('/:id', auth, obtenerReservaPorId);

// Ruta protegida para crear reserva
router.post('/', auth, crearReserva);

module.exports = router;
