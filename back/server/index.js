const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const blogRoutes = require('../db/Routes/blogRoutes.js');
const connectDatabase = require('../db/config.js'); // Import your database connection function
const mailRoutes= require('../Mailsender/emailRoute.js')
const appointmentRoutes = require('../db/Routes/appointmentRoutes.js');
// Connect to the database
connectDatabase();

app.use(cors()); // Enable CORS for your server (configure as needed)
app.use(bodyParser.json()); // Parse JSON requests

// Use the  routes

app.use('/', blogRoutes);
app.use('/', mailRoutes);
app.use('/', appointmentRoutes);
// Create an HTTP server and attach the Express app
const server = http.createServer(app);

server.listen(process.env.PORT || 3100, () => console.log('server is running on port 3100'));
