const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cohortRoutes = require('../db/Routes/cohortRoutes');
const pairOfTheDayRoutes = require('../db/Routes/pairsRoutes');
const studentRoutes = require('../db/Routes/studentRoutes');
const connectDatabase = require('../db/config.js'); // Import your database connection function

// Create an HTTP server and attach the Express app
const socket = require("socket.io");
const server = http.createServer(app);
const io = socket(server);

// Connect to the database
connectDatabase();

app.use(cors()); // Enable CORS for your server (configure as needed)
app.use(bodyParser.json()); // Parse JSON requests

// Use the cohort, PairOfTheDay, and student routes
app.use('/', cohortRoutes);
app.use('/', pairOfTheDayRoutes);
app.use('/', studentRoutes);

const users = {};

io.on('connection', socket => {
    // When a user connects, add them to the "all users" array
    users[socket.id] = socket;

    socket.on("sending signal", payload => {
        // Send the signal to all other connected users
        Object.keys(users).forEach(userID => {
            if (userID !== socket.id) {
                users[userID].emit('user joined', { signal: payload.signal, callerID: payload.callerID });
            }
        });
    });

    socket.on("returning signal", payload => {
        // Forward the returning signal to the specified user
        const userToSignal = users[payload.userToSignal];
        if (userToSignal) {
            userToSignal.emit('receiving returned signal', { signal: payload.signal, id: socket.id });
        }
    });

    socket.on('disconnect', () => {
        // Remove the user from the "all users" array
        delete users[socket.id];
    });

});

server.listen(process.env.PORT || 3100, () => console.log('server is running on port 3100'));
