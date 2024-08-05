const Student = require('../Models/studentModels'); // Import the Student model

// Controller for creating a new student
const createStudent = async (req, res) => {
  try {
    const { name, familyName, age, origin, phoneNumber, imageUrl } = req.body;

    // Create a new student
    const newStudent = new Student({
      name,
      familyName,
      age,
      origin,
      phoneNumber,
      imageUrl,
      previousPair: "7alzoun", // Set the previousPair field to "7alzoun" by default
    });

    // Save the student to the database
    await newStudent.save();

    res.status(201).json({ message: 'Student created successfully', student: newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the student' });
  }
};

// Controller for updating the previousPair of a student
const updatePreviousPair = async (req, res) => {
  try {
    const studentId = req.params.studentId; // Get the student ID from the request parameters
    const { previousPair } = req.body; // Get the updated previousPair from the request body

    // Find and update the student's previousPair by ID
    const updatedStudent = await Student.findByIdAndUpdate(studentId, { previousPair }, { new: true });

    if (updatedStudent) {
      res.json({ message: 'Student updated successfully', student: updatedStudent });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating the student' });
  }
};

// Controller for deleting a student by ID
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.studentId; // Get the student ID from the request parameters

    // Find and delete the student by ID
    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (deletedStudent) {
      res.json({ message: 'Student deleted successfully', student: deletedStudent });
    } else {
      res.status(404).json({ error: 'Student not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the student' });
  }
};
// Controller for getting all students
const getAllStudents = async (req, res) => {
  try {
    // Fetch all students from the database
    const students = await Student.find();

    res.status(200).json({ students });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching students' });
  }
};

module.exports = {
  createStudent,
  updatePreviousPair,
  deleteStudent,
  getAllStudents, // Add the new controller for getting all students
};

