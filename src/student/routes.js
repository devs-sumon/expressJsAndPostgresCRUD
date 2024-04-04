const express = require('express');
const studentController = require('./studentController');

const router = express.Router();

//get 
router.get('/', (req, res) => {
    res.send('Welcome to the Student API. The Student API URL is localhost:3000/api/students');
  });
// Routes for students
router.get('/students', studentController.getAllStudents);
router.post('/students', studentController.createStudent);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;
