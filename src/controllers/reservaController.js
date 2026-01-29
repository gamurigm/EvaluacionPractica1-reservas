const Reserva = require('../models/Reserva');

// Obtener todas las reservas del usuario autenticado
exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find({ userId: req.user.id });
    res.status(200).json(reservas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una reserva específica por ID
exports.obtenerReservaPorId = async (req, res) => {
  try {
    const reserva = await Reserva.findOne({ _id: req.params.id, userId: req.user.id });
    if (!reserva) {
      return res.status(404).json({ msg: 'Reserva no encontrada' });
    }
    res.status(200).json(reserva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear nueva reserva
exports.crearReserva = async (req, res) => {
  try {
    const reserva = new Reserva({ ...req.body, userId: req.user.id });
    await reserva.save();
    res.status(201).json({ msg: 'Reserva creada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
