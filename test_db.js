const mongoose = require('mongoose');

// Use the URI from .env
const uri = 'mongodb://localhost:27017/grupoA';

console.log('Attempting to connect to:', uri);

mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
        console.log('Successfully connected to MongoDB');
        process.exit(0);
    })
    .catch(err => {
        console.error('Connection failed:', err.message);
        process.exit(1);
    });
