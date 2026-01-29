const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

// Ruta GET para health check y ZAP scanning
router.get('/', (req, res) => {
  res.status(200).json({ 
    message: 'Auth API',
    endpoints: {
      register: 'POST /api/auth/register',
      login: 'POST /api/auth/login'
    }
  });
});

// Ruta para registro
router.post('/register', register);

// Ruta para login
router.post('/login', login);

module.exports = router;
