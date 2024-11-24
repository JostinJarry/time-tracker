// backend/routes/tasks.js
const express = require('express');
const Employee = require('../models/employeeModelTesting'); // Import the Task model

const router = express.Router();

// POST route to add a new task
router.post('/employee', async (req, res) => {
  const { name, description, timeSpent } = req.body;

  try {
    const newEmployee = new Employee({
      name,
      description,
      timeSpent,
    });

    await newEmployee.save(); // Save the task to MongoDB
    res.status(201).json(newEmployee); // Send back the created task
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
