const express = require('express');
const router = express.Router();
const { getSingleAppointment, createAppointment } = require('../Controllers/appointmentControllers');

// Route to get a single appointment by ID
router.get('/appointment/:id', getSingleAppointment);

// Route to create a new appointment
router.post('/appointment', createAppointment);

module.exports = router;
