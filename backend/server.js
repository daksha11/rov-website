// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add CORS support
const csv = require('csv-writer').createObjectCsvWriter;

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Configure CSV writer
const csvWriter = csv({
  path: 'emails.csv',
  header: [
    { id: 'email', title: 'Email' }
  ],
  append: true // Append to the file instead of overwriting
});

// POST endpoint to handle email subscriptions
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Write the email to the CSV file
    await csvWriter.writeRecords([{ email }]);
    res.status(200).json({ message: 'Email added successfully' });
  } catch (error) {
    console.error('Error writing to CSV:', error);
    res.status(500).json({ error: 'Failed to add email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});