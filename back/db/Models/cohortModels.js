const mongoose = require('mongoose'); // Assuming you're using Mongoose for MongoDB

const cohortSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now // Set the default date to the current date and time
  },
  name: {
    type: String,
    required: true
  },
  region: {
    type: String,
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }]
});

const Cohort = mongoose.model('Cohort', cohortSchema);

module.exports = Cohort;
