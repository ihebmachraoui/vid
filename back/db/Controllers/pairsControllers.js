const PairOfTheDay = require('../Models/pairsModels'); // Import the PairOfTheDay model

// Controller for creating a new pair of the day
const createPairOfTheDay = async (req, res) => {
  try {
    const { cohortId, pairs } = req.body; // Get the cohort ID and pairs from the request body

    // Create a new PairOfTheDay document
    const newPairOfTheDay = new PairOfTheDay({
      cohortId,
      pairs,
    });

    // Save the new pair of the day to the database
    await newPairOfTheDay.save();

    res.status(201).json({ message: 'Pair of the day created successfully', pairOfTheDay: newPairOfTheDay });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the pair of the day' });
  }
};

// Controller for updating a pair of the day
const updatePairOfTheDay = async (req, res) => {
  try {
    const pairOfTheDayId = req.params.pairOfTheDayId; // Get the pair of the day ID from the request parameters
    const { pairs } = req.body; // Get the updated pairs from the request body

    // Find and update the pair of the day by ID
    const updatedPairOfTheDay = await PairOfTheDay.findByIdAndUpdate(pairOfTheDayId, { pairs }, { new: true });

    if (updatedPairOfTheDay) {
      res.json({ message: 'Pair of the day updated successfully', pairOfTheDay: updatedPairOfTheDay });
    } else {
      res.status(404).json({ error: 'Pair of the day not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the pair of the day' });
  }
};

// Controller for deleting all pairs of the day with a specific cohort ID
const deleteAllPairsWithCohortId = async (req, res) => {
  try {
    const cohortId = req.params.cohortId; // Get the cohort ID from the request parameters

    // Find and delete all pairs of the day with the given cohort ID
    const deletedPairs = await PairOfTheDay.deleteMany({ cohortId });

    if (deletedPairs.deletedCount > 0) {
      res.json({ message: 'Pairs of the day deleted successfully' });
    } else {
      res.status(404).json({ error: 'No pairs of the day found for the specified cohort' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the pairs of the day' });
  }
};

// Controller for getting all pair of the day records
const getAllPairOfTheDays = async (req, res) => {
  try {
    // Fetch all pair of the day records from the database
    const pairOfTheDays = await PairOfTheDay.find();

    res.status(200).json({ pairOfTheDays });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching pair of the day records' });
  }
};

// Controller for getting a pair of the day record by ID
const getPairOfTheDayById = async (req, res) => {
  try {
    const pairOfTheDayId = req.params.pairOfTheDayId; // Get the pair of the day ID from the request parameters

    // Find the pair of the day record by ID
    const pairOfTheDay = await PairOfTheDay.findById(pairOfTheDayId);

    if (pairOfTheDay) {
      res.status(200).json({ pairOfTheDay });
    } else {
      res.status(404).json({ error: 'Pair of the day record not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the pair of the day record' });
  }
};

module.exports = {
  createPairOfTheDay,
  updatePairOfTheDay,
  deleteAllPairsWithCohortId,
  getAllPairOfTheDays, // Add the new controller for getting all pair of the day records
  getPairOfTheDayById // Add the new controller for getting a pair of the day record by ID
};

