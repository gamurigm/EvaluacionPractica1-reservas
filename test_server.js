const app = require('./src/app');

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Test server running on http://localhost:${PORT}`);
  console.log('Available routes:');
  console.log('  GET  http://localhost:3000/');
  console.log('  POST http://localhost:3000/api/auth/register');
  console.log('  POST http://localhost:3000/api/auth/login');
  console.log('  GET  http://localhost:3000/api/reservas/ (requires auth)');
  console.log('  POST http://localhost:3000/api/reservas/ (requires auth)');
});
