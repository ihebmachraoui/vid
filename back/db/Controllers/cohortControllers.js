const Cohort = require('../Models/cohortModels'); // Import the Cohort model
const mongoose = require('mongoose');

// Controller for creating a new cohort
const createCohort = async (req, res) => {
  try {
    const { name, region } = req.body; // You can get the name and region from the request body

    // Create a new cohort
    const newCohort = new Cohort({
      name,
      region,
      students: [] // You can initialize the students array if needed
    });

    // Save the cohort to the database
    await newCohort.save();

    res.status(201).json({ message: 'Cohort created successfully', cohort: newCohort });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the cohort' });
  }
};

// Controller for deleting a cohort by ID
const deleteCohort = async (req, res) => {
  try {
    const cohortId = req.params.cohortId; // Get the cohort ID from the request parameters

    // Find and delete the cohort by ID
    const deletedCohort = await Cohort.findByIdAndDelete(cohortId);

    if (deletedCohort) {
      res.json({ message: 'Cohort deleted successfully', cohort: deletedCohort });
    } else {
      res.status(404).json({ error: 'Cohort not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the cohort' });
  }
};

// Controller for getting a single cohort by ID
// Controller for getting all cohorts
const getAllCohorts = async (req, res) => {
  try {
    // Fetch all cohorts from the database
    const cohorts = await Cohort.find();

    res.status(200).json({ cohorts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching cohorts' });
  }
};
const getCohortById = async (req, res) => {
  try {
    const cohortId = req.params.cohortId; // Get the cohort ID from the request parameters

    // Find the cohort by ID
    const cohort = await Cohort.findById(cohortId);

    if (cohort) {
      res.status(200).json({ cohort });
    } else {
      res.status(404).json({ error: 'Cohort not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching the cohort' });
  }
};
const updateCohort = async (req, res) => {
  try {
    const cohortId = req.params.cohortId;
    const newStudent = req.body.student; // Assuming newStudent is the ObjectId of the student to be added
    console.log(req.body.student); // Log the entire request body

    // Validate that newStudent is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(newStudent)) {
      return res.status(400).json({ error: 'Invalid student ObjectId' });
    }

    // Find and update the cohort by ID
    const updatedCohort = await Cohort.findByIdAndUpdate(
      cohortId,
      {
        $push: { students: newStudent }, // Push the new student ObjectId into the students array
      },
      { new: true }
    );

    if (updatedCohort) {
      res.status(200).json({ message: 'Cohort updated successfully', cohort: updatedCohort });
    } else {
      res.status(404).json({ error: 'Cohort not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the cohort' });
  }
};



module.exports = {
  updateCohort,
  getCohortById,
  createCohort,
  deleteCohort,
  getAllCohorts
};
