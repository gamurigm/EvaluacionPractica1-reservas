const app = require('./src/app');

console.log('\n=== Debugging Routes ===');
console.log('Express stack layers:');
app._router.stack.forEach((r, i) => {
  if (r.route) {
    console.log(`${i}: ${Object.keys(r.route.methods)} ${r.route.path}`);
  } else if (r.name === 'router') {
    console.log(`${i}: ROUTER ${r.regexp}`);
  }
});

const PORT = 3111;
app.listen(PORT, () => {
  console.log(`\nDebug server on http://localhost:${PORT}`);
  console.log('Test: curl http://localhost:' + PORT + '/');
  console.log('Test: curl http://localhost:' + PORT + '/api/auth');
});
