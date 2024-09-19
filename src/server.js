const express = require('express');
const routes = require('./routes');  // Import routes
const connection = require('./db');  // Import koneksi MySQL dari db.js

const app = express();

// Set the port to 3000 if not specified
const PORT = process.env.PORT || 3000;

// Use the routes
app.use('/api', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = connection; 
