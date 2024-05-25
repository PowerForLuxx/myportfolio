const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'portfolio' 
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.get('/projects', (req, res) => {
  const query = 'SELECT * FROM projects';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching projects:', err);
      res.status(500).json({ error: 'Error fetching projects' });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
