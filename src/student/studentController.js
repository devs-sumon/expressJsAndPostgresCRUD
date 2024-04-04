const { getAllStudents, createStudentQuery, updateStudentQuery, deleteStudentQuery } = require('./query');

async function createStudent(req, res) {
    const { email, name, age, dob } = req.body;
    try {
      const createdStudent = await createStudentQuery(email, name, age, dob);
      res.status(201).json({
        success: true,
        message: 'Student created successfully',
        data: createdStudent
      });
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }

async function updateStudent(req, res) {
    const id = req.params.id;
    const { email, name, age, dob } = req.body;
    try {
      const updatedStudent = await updateStudentQuery(id, email, name, age, dob);
      res.status(200).json({
        success: true,
        message: 'Student updated successfully',
        data: updatedStudent
      });
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }

async function deleteStudent(req, res) {
    const id = req.params.id;
    try {
      const deletedStudent = await deleteStudentQuery(id);
      res.json({ message: 'Student deleted successfully', deletedStudent });
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

module.exports = { getAllStudents, createStudent, updateStudent, deleteStudent };
