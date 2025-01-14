const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Subscriber } = require('./models');
const { server } = require('typescript');

const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from the React frontend
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type'], // Allowed headers
  }));
app.use(bodyParser.json());

// API endpoint to handle subscription
app.post('/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const newSubscriber = await Subscriber.create({ email });
    res.status(201).json({ message: 'Subscription successful', data: newSubscriber });
  } catch (error) {
    console.error(error);
    if (error.name === 'SequelizeUniqueConstraintError') {
      res.status(400).json({ message: 'Email already subscribed' });
    } else {
      res.status(500).json({ message: 'Error saving email' });
    }
  }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
