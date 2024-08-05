const mongoose = require('mongoose');

const POTD = new mongoose.Schema({
  cohortId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cohort', // Reference to the Cohort model
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  pairs: [{
    student1: {
      type: mongoose.Schema.Types.Mixed, // Change the type to Mixed
      ref: 'Student' // Reference to the Student model
    },
    student2: {
      type: mongoose.Schema.Types.Mixed, // Change the type to Mixed
      ref: 'Student' // Reference to the Student model
    }
  }]
});

const PairOfTheDay = mongoose.model('POTD', POTD);

module.exports = PairOfTheDay;
