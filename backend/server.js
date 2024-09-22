const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS to allow requests from the React frontend (port 3000)
app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Connect to the SQLite database (creates 'contacts.db' if it doesn't exist)
const db = new sqlite3.Database('./contacts.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create 'contacts' table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT
  )
`);

// Route to handle POST request for form submission (for the React frontend)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validate that all required fields are present
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Insert data into the SQLite database
  const query = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.run(query, [name, email, message], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Could not save message' });
    } else {
      res.status(200).json({ success: 'Message saved successfully' });
    }
  });
});

// Route for GET requests to '/contact' (testing purposes)
app.get('/contact', (req, res) => {
  res.send('This is the contact page. To submit a form, please use POST.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
