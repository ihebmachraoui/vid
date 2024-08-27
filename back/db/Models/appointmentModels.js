const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  date: {
    type: String, // You can use Date type if preferred
    required: true,
  },
  time: {
    type: String, // You can use Date type if preferred
    required: true,
  },
  consultation: {
    type: String,
    required: true,
  },
  urgent: {
    type: String,
    enum: ['yes', 'no'],
    default: 'no',
  },
}, {
  timestamps: true,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
