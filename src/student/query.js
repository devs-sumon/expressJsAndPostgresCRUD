const { client } = require('../../db');

// GET all students
async function getAllStudents(req, res) {
  try {
    const result = await client.query('SELECT id, email, name, age, dob FROM students');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// POST create student
async function createStudentQuery(email, name, age, dob) {
    const query = 'INSERT INTO students (email, name, age, dob) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [email, name, age, dob];
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error executing query', error);
      throw error;
    }
  }

// PUT update student
async function updateStudentQuery(id, email, name, age, dob) {
    const query = 'UPDATE students SET email = $1, name = $2, age = $3, dob = $4 WHERE id = $5 RETURNING *';
    const values = [email, name, age, dob, id];
    try {
      const result = await client.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error executing query', error);
      throw error;
    }
  }
// DELETE delete student
async function deleteStudentQuery(id) {
    const query = 'DELETE FROM students WHERE id = $1 RETURNING *';
    try {
      const result = await client.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error('Error executing query', error);
      throw error;
    }
}

module.exports = { getAllStudents, createStudentQuery, updateStudentQuery, deleteStudentQuery };
