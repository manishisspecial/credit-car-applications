const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_URI;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Mongoose Schema and Model
const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cardType: { type: String, required: true },
});

const Application = mongoose.model('Application', applicationSchema);

// API Endpoint to handle form submission
app.post('/api/apply', async (req, res) => {
  try {
    const { name, email, phone, cardType } = req.body;
    const newApplication = new Application({ name, email, phone, cardType });
    await newApplication.save();
    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// Example POST route
app.post("/submit", (req, res) => {
  const { name, email, phone, cardType } = req.body;
  console.log("Received data:", req.body);

  // Simulate database operation
  if (name && email && phone && cardType) {
    res.status(200).json({ message: "Application submitted successfully!" });
  } else {
    res.status(400).json({ message: "All fields are required!" });
  }
});

// Start the server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
