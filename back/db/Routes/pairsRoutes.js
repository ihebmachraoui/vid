const express = require('express');
const router = express.Router();
const pairOfTheDayController = require('../Controllers/pairsControllers.js');

// Create a new pair of the day
router.post('/pairOfTheDay', pairOfTheDayController.createPairOfTheDay);

// Update a pair of the day by ID
router.put('/pairOfTheDay/:pairOfTheDayId', pairOfTheDayController.updatePairOfTheDay);

// Delete all pairs of the day with a specific cohort ID
router.delete('/pairOfTheDay/cohort/:cohortId', pairOfTheDayController.deleteAllPairsWithCohortId);

// Get all pair of the day records
router.get('/pairOfTheDay', pairOfTheDayController.getAllPairOfTheDays);

// Get a pair of the day record by ID
router.get('/pairOfTheDay/:pairOfTheDayId', pairOfTheDayController.getPairOfTheDayById);

module.exports = router;
