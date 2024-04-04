const express = require('express');
const { connectDB } = require('./db');
const routes = require('./src/student/routes');

const app = express();
const port = 3000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, I am Sumon. To access api go to localhost:3000/api");
  });

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
