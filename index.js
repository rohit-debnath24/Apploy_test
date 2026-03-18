const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the backend API!',
    status: 'success'
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    message: 'This is a simple Express backend deployed on Vercel.',
    timestamp: new Date().toISOString()
  });
});

// Post example
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({
    message: 'Data received successfully',
    receivedData: data
  });
});

// Start server (for local development)
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

// Export the app for Vercel serverless function
module.exports = app;
