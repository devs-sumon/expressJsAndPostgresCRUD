const { Client } = require('pg');

// Database connection string
const connectionString = 'postgresql://postgres:Asdf1234@localhost:5432/Student';

// Create a new PostgreSQL client
const client = new Client({
  connectionString: connectionString
});

// Connect to the PostgreSQL server
async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Connection error', error.stack);
    process.exit(1); // Exit the process if unable to connect to the database
  }
}

module.exports = { connectDB, client };
