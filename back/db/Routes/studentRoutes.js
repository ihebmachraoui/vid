const express = require('express');
const router = express.Router();
const studentController = require('../Controllers/studentControllers.js');

// Route for creating a new student
router.post('/students', studentController.createStudent);

// Route for updating a student's previousPair by ID
router.put('/students/:studentId', studentController.updatePreviousPair);

// Route for deleting a student by ID
router.delete('/students/:studentId', studentController.deleteStudent);

// Route for getting all students
router.get('/students', studentController.getAllStudents);

module.exports = router;
