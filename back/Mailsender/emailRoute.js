// emailRoutes.js
const express = require('express');
const router = express.Router();
const { sender } = require('./emailControllers');

// Define the route to send emails
router.post('/send-email', sender);

module.exports = router;
