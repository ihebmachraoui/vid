const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  familyName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String
  },
  previousPair: {
    type: String
  },
  date: {
    type: Date, // You can use the Date data type for the date field
    default: Date.now // Set the default value to the current date and time
  },
  // Add other fields as needed
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
