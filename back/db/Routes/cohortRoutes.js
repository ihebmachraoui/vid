const express = require('express');
const router = express.Router();
const cohortController = require('../Controllers/cohortControllers.js');

// Route for creating a new cohort
router.post('/cohorts', cohortController.createCohort);

// Route for deleting a cohort by ID
router.delete('/cohorts/:cohortId', cohortController.deleteCohort);

// Route for getting all cohorts
router.get('/cohorts', cohortController.getAllCohorts);

// Route for getting a cohort by ID
router.get('/cohorts/:cohortId', cohortController.getCohortById);

// Route for updating a cohort by ID
router.put('/cohorts/:cohortId', cohortController.updateCohort);

module.exports = router;
