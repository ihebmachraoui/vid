const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('../db/Routes/studentRoutes');
const connectDatabase = require('../db/config.js'); // Import your database connection function

// Connect to the database
connectDatabase();

app.use(cors()); // Enable CORS for your server (configure as needed)
app.use(bodyParser.json()); // Parse JSON requests

// Use the student routes

app.use('/', studentRoutes);

// Create an HTTP server and attach the Express app
const server = http.createServer(app);

server.listen(process.env.PORT || 3100, () => console.log('server is running on port 3100'));
