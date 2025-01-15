// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Add CORS support
const csv = require('csv-writer').createObjectCsvWriter;
const fs = require('fs'); // To read the existing CSV file
const path = require('path');

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Path to the CSV file
const csvFilePath = path.join(__dirname, 'emails.csv');

// Configure CSV writer
const csvWriter = csv({
  path: csvFilePath,
  header: [
    { id: 'serialNumber', title: 'Serial Number' }, // Serial Number
    { id: 'email', title: 'Email' }, // Email
    { id: 'date', title: 'Date' } // Date of entry
  ],
  append: true // Append to the file instead of overwriting
});

// Function to get the next serial number based on the number of entries
const getNextSerialNumber = async () => {
  try {
    // Check if the CSV file exists
    if (fs.existsSync(csvFilePath)) {
      // Read the existing CSV file
      const data = fs.readFileSync(csvFilePath, 'utf8');
      const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines

      // Exclude the header row when counting entries
      if (lines.length > 1) {
        return lines.length; // The next serial number is the number of records + 1
      }
    }
    return 1; // If the file doesn't exist or is empty, start with 1
  } catch (error) {
    console.error('Error reading CSV file:', error);
    return 1; // Fallback to 1 in case of an error
  }
};

// POST endpoint to handle email subscriptions
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Generate the next serial number
    const serialNumber = await getNextSerialNumber();

    // Get the current date and time
    const date = new Date().toLocaleString();

    // Write the data to the CSV file
    await csvWriter.writeRecords([{ serialNumber, email, date }]);
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
