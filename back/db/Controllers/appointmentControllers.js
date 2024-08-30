const Appointment = require('../Models/appointmentModels');

/**
 * Get a single appointment by ID
 */
const getSingleAppointment = async (req, res) => {
    try {
      const appointment = await Appointment.findById(req.params.id);
      
      if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
      }
  
      res.json(appointment);
    } catch (error) {
      console.error('Error fetching appointment:', error);
      res.status(500).json({ message: 'Server Error', error });
    }
  };
  
  /**
   * Create a new appointment
   */
  const createAppointment = async (req, res) => {
    try {
      const { firstName, lastName, phoneNumber, email, age, date, time, consultation, urgent } = req.body;
      
      // Basic validation
      if (!firstName || !lastName || !phoneNumber || !email || !age || !date || !time || !consultation) {
        return res.status(400).json({ message: 'Please provide all required fields' });
      }
      
      const newAppointment = new Appointment({
        firstName,
        lastName,
        phoneNumber,
        email,
        age,
        date,
        time,
        consultation,
        urgent, // 'yes' or 'no', defaults to 'no'
      });
      
      const savedAppointment = await newAppointment.save();
      
      res.status(200).json(savedAppointment);
    } catch (error) {
      console.error('Error creating appointment:', error);
      res.status(500).json({ message: 'Server Error', error });
    }
  };
  module.exports ={
    createAppointment,
    getSingleAppointment
  }