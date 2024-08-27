// emailRoutes.js
const express = require('express');
const router = express.Router();
const { sendEmail } = require('./emailControllers');

// Define the route to send emails
router.post('/send-email', sendEmail);

module.exports = router;
